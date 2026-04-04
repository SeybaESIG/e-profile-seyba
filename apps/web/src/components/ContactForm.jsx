import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/** Your inbox. Or set `VITE_CONTACT_EMAIL` in `apps/web/.env` (restart dev server). */
const CONTACT_EMAIL_FALLBACK = 'contact.seyba25@gmail.com';

const ContactForm = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = e => {
        const {
            name,
            value
        } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        const recipient =
            import.meta.env.VITE_CONTACT_EMAIL?.trim() || CONTACT_EMAIL_FALLBACK.trim();
        if (!recipient) {
            toast({
                variant: 'destructive',
                title: 'Contact email not set',
                description:
                    'Add your address to CONTACT_EMAIL_FALLBACK in ContactForm.jsx, or set VITE_CONTACT_EMAIL in apps/web/.env (see .env.example), then restart the dev server.',
            });
            return;
        }

        const subject = encodeURIComponent(formData.subject.trim());
        const body = encodeURIComponent(
            [
                `Name: ${formData.name.trim()}`,
                `Their email: ${formData.email.trim()}`,
                '',
                formData.message.trim(),
            ].join('\n'),
        );

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        toast({
            title: 'Opening your email app',
            description: 'Send the draft from Mail / Outlook / Gmail to finish.',
        });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };
    return <section id="contact" className="section-padding bg-card">
        <div className="container-custom">
            <motion.div initial={{
                opacity: 0,
                y: 20
            }} whileInView={{
                opacity: 1,
                y: 0
            }} viewport={{
                once: true
            }} transition={{
                duration: 0.5
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
            
            </motion.div>

            <div className="max-w-2xl mx-auto">
                <motion.form initial={{
                    opacity: 0,
                    y: 20
                }} whileInView={{
                    opacity: 1,
                    y: 0
                }} viewport={{
                    once: true
                }} transition={{
                    duration: 0.5,
                    delay: 0.1
                }} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card transition-all duration-200" placeholder="Your name" />
                        </div>
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card transition-all duration-200" placeholder="your.email@example.com" />
                        </div>
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject
                        </label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card transition-all duration-200" placeholder="Your subject" />
                        </div>
                        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card transition-all duration-200 resize-none" placeholder="Your message" />
                        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                        Send
                        <Send size={18} />
                    </button>
                </motion.form>
            </div>
        </div>
    </section>;
};
export default ContactForm;