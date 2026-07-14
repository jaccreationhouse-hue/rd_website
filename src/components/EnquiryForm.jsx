import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle, AlertCircle, Loader2, ChevronDown } from 'lucide-react';

const BLUE = '#0067B8';
const DARK = '#1B1B1B';
const GRAY = '#F5F5F5';
const BORDER = '#E5E5E5';
const MUTED = '#666666';

const courseOptions = [
  'B.Sc Computer Science', 'B.Sc IT', 'B.Sc AI & Data Science',
  'B.Sc Cyber Security', 'BCA', 'B.Com', 'B.Com CA', 'B.Com PA',
  'B.Com A&F', 'BBA', 'B.Sc Viscom', 'B.Sc CDF', 'BA English Literature',
  'M.Sc CS', 'M.Com CA', 'MA English Literature', 'MCA', 'M.Sc Viscom',
  'Ph.D CS', 'Ph.D Commerce', 'Ph.D Management', 'Other / Not Sure',
];

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^\+?[\d\s-]{10,}$/, { message: 'Enter a valid phone number.' }),
  email: z.string().email({ message: 'Enter a valid email.' }).optional().or(z.literal('')),
  course: z.string().min(1, { message: 'Please select a course.' }),
  message: z.string().optional(),
});

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  fontFamily: "var(--font-sans)",
  fontSize: 14.5,
  color: DARK,
  backgroundColor: '#FFFFFF',
  border: `1px solid ${BORDER}`,
  outline: 'none',
  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  borderRadius: 4,
};

const labelStyle = {
  display: 'block',
  fontFamily: "var(--font-sans)",
  fontSize: 13,
  fontWeight: 600,
  color: DARK,
  marginBottom: 6,
};

const errorStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: 12,
  color: '#A80000',
  marginTop: 4,
};

export default function EnquiryForm({ variant = 'light', title }) {
  const [status, setStatus] = useState('idle');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', phone: '', email: '', course: '', message: '' },
  });

  const onSubmit = async (values) => {
    setStatus('loading');
    try {
      await new Promise(res => setTimeout(res, 1200));
      console.log('Form submitted:', values);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
        <CheckCircle size={48} style={{ color: '#107C10' }} />
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: DARK }}>
          Enquiry Received!
        </h3>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14.5, color: MUTED, maxWidth: 320, lineHeight: 1.6 }}>
          Thank you. Our admissions team will reach out to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="fluent-btn-primary"
          style={{ marginTop: 8 }}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {title && (
        <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: DARK, marginBottom: 20 }}>
          {title}
        </h3>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

        {/* Full Name */}
        <div>
          <label htmlFor="eq-name" style={labelStyle}>Full Name *</label>
          <input
            id="eq-name"
            placeholder="e.g. Arun Kumar"
            {...register('name')}
            style={{
              ...inputStyle,
              borderColor: errors.name ? '#A80000' : BORDER,
            }}
            onFocus={e => {
              e.target.style.borderColor = BLUE;
              e.target.style.boxShadow = `0 0 0 3px rgba(0,103,184,0.15)`;
            }}
            onBlur={e => {
              e.target.style.borderColor = errors.name ? '#A80000' : BORDER;
              e.target.style.boxShadow = 'none';
            }}
          />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>

        {/* Contact Group */}
        <div style={{ gap: 16 }} className="grid grid-cols-1 sm:grid-cols-2">
          {/* Phone */}
          <div>
            <label htmlFor="eq-phone" style={labelStyle}>Phone Number *</label>
            <input
              id="eq-phone"
              type="tel"
              placeholder="+91 99999 99999"
              {...register('phone')}
              style={{
                ...inputStyle,
                borderColor: errors.phone ? '#A80000' : BORDER,
              }}
              onFocus={e => {
                e.target.style.borderColor = BLUE;
                e.target.style.boxShadow = `0 0 0 3px rgba(0,103,184,0.15)`;
              }}
              onBlur={e => {
                e.target.style.borderColor = errors.phone ? '#A80000' : BORDER;
                e.target.style.boxShadow = 'none';
              }}
            />
            {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="eq-email" style={labelStyle}>Email Address</label>
            <input
              id="eq-email"
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              style={{ ...inputStyle }}
              onFocus={e => {
                e.target.style.borderColor = BLUE;
                e.target.style.boxShadow = `0 0 0 3px rgba(0,103,184,0.15)`;
              }}
              onBlur={e => {
                e.target.style.borderColor = BORDER;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        </div>

        {/* Course */}
        <div style={{ position: 'relative' }}>
          <label htmlFor="eq-course" style={labelStyle}>Course Interested In *</label>
          <Controller
            name="course"
            control={control}
            render={({ field }) => (
              <div style={{ position: 'relative' }}>
                <select
                  id="eq-course"
                  {...field}
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    cursor: 'pointer',
                    borderColor: errors.course ? '#A80000' : BORDER,
                    paddingRight: 36,
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = BLUE;
                    e.target.style.boxShadow = `0 0 0 3px rgba(0,103,184,0.15)`;
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = errors.course ? '#A80000' : BORDER;
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">— Select a course —</option>
                  {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown size={15} style={{
                  position: 'absolute',
                  right: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: MUTED,
                  pointerEvents: 'none',
                }} />
              </div>
            )}
          />
          {errors.course && <p style={errorStyle}>{errors.course.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="eq-msg" style={labelStyle}>Message (optional)</label>
          <textarea
            id="eq-msg"
            placeholder="Any specific questions or requirements..."
            rows={4}
            {...register('message')}
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: 100,
            }}
            onFocus={e => {
              e.target.style.borderColor = BLUE;
              e.target.style.boxShadow = `0 0 0 3px rgba(0,103,184,0.15)`;
            }}
            onBlur={e => {
              e.target.style.borderColor = BORDER;
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </div>

      {status === 'error' && (
        <div style={{
          marginTop: 16,
          padding: '12px 16px',
          backgroundColor: '#FDE8E8',
          border: '1px solid #A80000',
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: "var(--font-sans)",
          fontSize: 13.5,
          color: '#A80000',
        }}>
          <AlertCircle size={15} />
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          width: '100%',
          marginTop: 24,
          border: 'none',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
        className="fluent-btn-primary"
      >
        {status === 'loading' ? (
          <><Loader2 size={15} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={15} /> Send Enquiry</>
        )}
      </button>

      <p style={{
        fontFamily: "var(--font-sans)",
        fontSize: 11.5,
        color: MUTED,
        textAlign: 'center',
        marginTop: 14,
      }}>
        Your information is confidential and only used for admissions contact.
      </p>
    </form>
  );
}
