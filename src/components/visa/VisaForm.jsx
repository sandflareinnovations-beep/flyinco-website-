import React from 'react';

const VisaForm = () => {
    return (
        <section className="py-24 bg-gray-50 flex justify-center items-center px-6">
            <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Side Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-secondary mb-8 leading-tight">
                        Need Help with Your Visa Application?
                    </h2>
                    <p className="text-gray-500 font-body leading-relaxed text-lg mb-10 max-w-lg font-medium">
                        Our visa experts are here to help you every step of the way with professional and personalized support.
                    </p>
                    <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 max-w-md">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain opacity-50" />
                        </div>
                        <div>
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Expert Support</p>
                            <p className="text-xl font-black text-secondary tracking-tighter">Talk to our experts</p>
                        </div>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-50 relative overflow-hidden group">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-gray-50 border border-transparent focus:border-primary/30 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all font-body text-sm text-secondary font-bold placeholder:text-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-50 border border-transparent focus:border-primary/30 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all font-body text-sm text-secondary font-bold placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-gray-50 border border-transparent focus:border-primary/30 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all font-body text-sm text-secondary font-bold placeholder:text-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Nationality</label>
                                <input
                                    type="text"
                                    placeholder="Which country?"
                                    className="w-full bg-gray-50 border border-transparent focus:border-primary/30 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all font-body text-sm text-secondary font-bold placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-4">Message</label>
                            <textarea
                                rows="4"
                                placeholder="How can we help you?"
                                className="w-full bg-gray-50 border border-transparent focus:border-primary/30 focus:bg-white px-6 py-6 rounded-3xl outline-none transition-all font-body text-sm text-secondary font-bold placeholder:text-gray-300 resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full bg-primary text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-secondary hover:shadow-2xl transition-all shadow-xl shadow-primary/20 transform active:scale-[0.98]">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default VisaForm;
