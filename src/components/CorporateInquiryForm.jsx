import React, { useState } from 'react';
import { Send } from 'lucide-react';

const CorporateInquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        requirements: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to an API
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', company: '', phone: '', requirements: '' });
    };

    return (
        <section className="py-24 bg-grayLight" id="inquiry-form">
            <div className="max-w-[800px] mx-auto px-6 md:px-12">
                <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-100">
                    <div className="text-center mb-10">
                        <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3">Get in Touch</h4>
                        <h2 className="text-3xl md:text-5xl font-display font-black text-secondary leading-tight">
                            Corporate Travel <span className="text-primary">Inquiry</span>
                        </h2>
                        <p className="text-gray-500 mt-4 font-bold text-sm">Fill out the form below and our corporate travel experts will reach out to you within 24 hours.</p>
                    </div>

                    {isSubmitted && (
                        <div className="mb-8 p-4 bg-green-50 text-green-700 rounded-2xl border border-green-200 text-center font-bold">
                            Thank you! Your inquiry has been submitted successfully.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black uppercase tracking-widest text-secondary">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body text-secondary font-medium"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black uppercase tracking-widest text-secondary">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body text-secondary font-medium"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black uppercase tracking-widest text-secondary">Company Name</label>
                                <input 
                                    type="text" 
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body text-secondary font-medium"
                                    placeholder="Company"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-black uppercase tracking-widest text-secondary">Phone Number</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body text-secondary font-medium"
                                    placeholder="Phone"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-black uppercase tracking-widest text-secondary">Travel Requirements</label>
                            <textarea 
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body text-secondary font-medium resize-none"
                                placeholder="Please tell us about your corporate travel needs..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-primary text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20 mt-4"
                        >
                            Submit Inquiry <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CorporateInquiryForm;
