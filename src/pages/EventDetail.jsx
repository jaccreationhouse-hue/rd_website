import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Trophy, Users, Clock, Mail, MessageCircle } from 'lucide-react';
import SEOMeta from '../components/SEOMeta';
import ScrollReveal from '../components/ScrollReveal';
import { events } from '../data/events';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-heading font-bold text-3xl text-foreground mb-4">Event Not Found</h1>
        <p className="text-muted-foreground mb-8">This event doesn't exist or may have been removed.</p>
        <Button asChild className="rounded-none">
          <Link to="/events">Back to Events</Link>
        </Button>
      </div>
    );
  }

  const isHackathon = event.slug === 'hackathon-2026';

  return (
    <>
      <SEOMeta title={event.title} description={event.description} />

      {/* Hero */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden border-b border-border"
        style={{ backgroundColor: `${event.color}11` }}
      >
        <img
          src={event.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="container relative z-10">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors mb-6 font-heading"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>

          <div className="mb-4">
            <Badge 
              className="rounded-none uppercase tracking-wider text-[10px] font-bold px-3 py-1 border-border"
              style={{ backgroundColor: event.color, color: '#fff' }}
            >
              {event.category}
            </Badge>
          </div>

          <h1 className="font-heading font-bold text-[clamp(32px,5vw,56px)] leading-none tracking-tight text-foreground mb-6 max-w-4xl">
            {event.title}
          </h1>

          <div className="flex items-center gap-2 text-base font-medium text-foreground/80">
            <Calendar className="h-5 w-5" style={{ color: event.color }} />
            {event.date}
          </div>
        </div>
      </section>

      <main className="bg-background">
        {/* General description */}
        <section className="py-24 border-b border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-6">About the Event</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {event.description}
                  </p>
                  
                  {event.highlights && (
                    <>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-4">Highlights</h3>
                      <ul className="space-y-3">
                        {event.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-base text-foreground/80">
                            <span 
                              className="w-2 h-2 rounded-full shrink-0 mt-2" 
                              style={{ backgroundColor: event.color }} 
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </ScrollReveal>
              </div>

              {/* Contact box */}
              <div className="lg:col-span-1">
                <ScrollReveal delay={0.15}>
                  <Card className="rounded-none border-border shadow-[4px_4px_0px_0px_var(--color-border)] bg-card">
                    <CardHeader>
                      <CardTitle className="font-heading font-bold text-xl">Register / Contact</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <Button asChild className="w-full rounded-none font-bold font-heading bg-accent text-accent-foreground hover:bg-accent/90 h-12 shadow-none">
                        <a
                          href={`https://wa.me/917373747474?text=Hi! I am interested in ${encodeURIComponent(event.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Register on WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full rounded-none font-bold font-heading border-border hover:bg-muted h-12 shadow-none">
                        <a href="mailto:info@rdcollege.in">
                          <Mail className="mr-2 h-5 w-5" />
                          Email Us
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Hackathon-specific content */}
        {isHackathon && event.rules && (
          <section className="py-24 border-b border-border bg-muted/20">
            <div className="container">
              
              {/* Prizes - always visible */}
              <ScrollReveal>
                <div className="mb-16">
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Prize Pool</h2>
                    <p className="text-lg text-muted-foreground">₹1,00,000+ in prizes, trophies, and internship opportunities.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {event.rules.prizes.map((prize, i) => {
                      const prizeColors = ['text-accent', 'text-muted-foreground', 'text-orange-600', 'text-primary'];
                      const borderColors = ['border-accent', 'border-muted-foreground', 'border-orange-600', 'border-primary'];
                      
                      return (
                        <Card key={prize.place} className={`rounded-none border-border border-t-4 ${borderColors[i]} shadow-none bg-card text-center`}>
                          <CardContent className="pt-8 pb-6">
                            <Trophy className={`mx-auto h-8 w-8 mb-4 ${prizeColors[i]}`} />
                            <div className="font-heading font-bold text-3xl text-foreground mb-2">{prize.amount}</div>
                            <div className="font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">{prize.place}</div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{prize.perks}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* Accordion for Details */}
              <ScrollReveal delay={0.1}>
                <div className="max-w-3xl mx-auto">
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">Hackathon Details</h2>
                  <Accordion type="single" collapsible className="w-full bg-card border border-border shadow-[4px_4px_0px_0px_var(--color-border)]">
                    
                    <AccordionItem value="tracks" className="border-border px-6">
                      <AccordionTrigger className="font-heading font-bold text-lg hover:no-underline py-6">
                        Problem Tracks
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {event.rules.tracks.map((track) => (
                            <div key={track.name} className="p-4 border border-border bg-muted/30">
                              <h4 className="font-heading font-bold text-foreground mb-2">{track.name}</h4>
                              <p className="text-sm text-muted-foreground">{track.description}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="timeline" className="border-border px-6">
                      <AccordionTrigger className="font-heading font-bold text-lg hover:no-underline py-6">
                        Timeline & Schedule
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-6">
                          {event.rules.timeline.map((item, i) => (
                            <div key={item.phase} className="flex gap-4 relative">
                              {i < event.rules.timeline.length - 1 && (
                                <div className="absolute left-4 top-8 bottom-[-24px] w-0.5 bg-border" />
                              )}
                              <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 border-2 border-accent">
                                <Clock className="h-4 w-4 text-accent" />
                              </div>
                              <div className="pt-1">
                                <h4 className="font-heading font-bold text-foreground">{item.phase}</h4>
                                <p className="text-sm text-muted-foreground">{item.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="eligibility" className="border-border px-6">
                      <AccordionTrigger className="font-heading font-bold text-lg hover:no-underline py-6">
                        Eligibility
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <ul className="space-y-3">
                          {event.rules.eligibility.map((e) => (
                            <li key={e} className="flex items-start gap-3 text-sm text-foreground/80">
                              <Users className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rules" className="border-border px-6">
                      <AccordionTrigger className="font-heading font-bold text-lg hover:no-underline py-6">
                        Submission Rules
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <ul className="space-y-4">
                          {event.rules.submissionRules.map((r, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 pb-4 border-b border-border last:border-0 last:pb-0">
                              <span className="w-6 h-6 rounded-none bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                  </Accordion>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Bottom Register CTA */}
        <section className="py-20 bg-accent text-accent-foreground text-center">
          <div className="container max-w-2xl">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                {isHackathon ? 'Ready to Build? Register Now.' : 'Join the Celebration!'}
              </h2>
              <p className="text-lg opacity-90 mb-8">
                {isHackathon ? 'Registrations close July 31, 2026.' : 'Stay tuned for more details.'}
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold font-heading rounded-none h-14 px-8 text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                <a
                  href={`https://wa.me/917373747474?text=Hi! I want to register for ${encodeURIComponent(event.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Register on WhatsApp
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
