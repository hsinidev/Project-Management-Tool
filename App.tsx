

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureTabs from './components/FeatureTabs';
import RewriterModal from './components/RewriterModal';
import SeoArticle from './components/SeoArticle';
import Modal from './components/Modal';
import { GoogleIcon, MicrosoftIcon, PayPalIcon, SpotifyIcon, SquareIcon, EBayIcon, CiscoIcon } from './components/icons';

const App: React.FC = () => {
    const [isRewriterModalOpen, setRewriterModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const modalContent: { [key: string]: { title: string; content: React.ReactNode } } = {
        'About': { title: 'About Us', content: <p>doodax is a demonstration project designed to showcase modern web development techniques with React and Tailwind CSS. This project is for educational purposes.</p> },
        // FIX: Replaced `class` with `className` for JSX compatibility.
        'Contact': { title: 'Contact Us', content: <p>For inquiries, please reach out to <a href="mailto:hsini.web@gmail.com" className="text-blue-600 hover:underline">hsini.web@gmail.com</a>.</p> },
        // FIX: Replaced `class` with `className` for JSX compatibility.
        'Guide': { title: 'User Guide', content: <div><h3 className="font-bold">How to use the AI Rewriter:</h3><ol className="list-decimal list-inside space-y-2 mt-2"><li>Click the "Tools" icon in the header to open the AI Rewriter.</li><li>Enter your Ollama endpoint (e.g., http://localhost:11434/api/generate).</li><li>Type or paste the text you want to rewrite.</li><li>Select a desired tone and platform.</li><li>Click "Rewrite Post" and wait for the AI-generated result.</li></ol></div> },
        'Privacy Policy': { title: 'Privacy Policy', content: <p>This application is a demonstration and does not collect or store any personal data. All information entered, including in the AI Rewriter tool, is processed in your browser and sent directly to the endpoint you provide. No data is logged or retained by our servers.</p> },
        'Terms of Service': { title: 'Terms of Service', content: <p>By using this demonstration application, you agree that it is provided "as is" without warranty of any kind. You are responsible for any content you generate and for complying with the terms of service of any third-party AI service you use via the provided endpoint field.</p> },
        'DMCA': { title: 'DMCA Policy', content: <p>As this is a non-commercial, educational project, all content is either original or used for demonstration purposes. If you believe any content infringes on your copyright, please contact us for its immediate removal.</p> },
    };

    const openModal = (modalName: string) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-800">
            <Header onOpenRewriter={() => setRewriterModalOpen(true)} onOpenModal={openModal} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-white pt-16 pb-20 text-center">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
                            Connect every team, task, and project together with doodax.
                        </h1>
                        <div className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="you@company.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="w-full sm:w-auto bg-[#0052CC] text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
                                Sign up
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">
                            Trying to access doodax? <a href="https://doodax.com/login" className="text-[#0052CC] hover:underline">Log in</a>
                        </p>
                        <div className="mt-8 flex justify-center items-center gap-4">
                            <p className="text-sm text-gray-500">Or sign up with:</p>
                            <div className="flex gap-4">
                               <button className="p-2 border rounded-full hover:bg-gray-100"><GoogleIcon /></button>
                               <button className="p-2 border rounded-full hover:bg-gray-100"><MicrosoftIcon /></button>
                               <button className="p-2 border rounded-full hover:bg-gray-100"><PayPalIcon /></button>
                               <button className="p-2 border rounded-full hover:bg-gray-100"><SpotifyIcon /></button>
                            </div>
                        </div>
                        <div className="mt-16 max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden">
                           <img src="https://picsum.photos/1200/600?random=1" alt="doodax workflow showing To Do, In Progress, and Done columns" className="w-full h-auto object-cover"/>
                        </div>
                    </div>
                </section>

                {/* Feature Discovery Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <FeatureTabs />
                    </div>
                </section>

                {/* Deep Feature Breakdown */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 space-y-24">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-4xl font-bold text-gray-900">Customize how your team’s work flows.</h2>
                                <p className="mt-4 text-lg text-gray-600">Create custom workflows that map to any style of work. From simple to complex, build a workflow that makes sense for your team's process.</p>
                            </div>
                            <div className="md:w-1/2">
                                <img src="https://picsum.photos/600/400?random=2" alt="Customizable workflow illustration" className="rounded-lg shadow-xl"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-4xl font-bold text-gray-900">Stay on track – even when the track changes.</h2>
                                <p className="mt-4 text-lg text-gray-600">Timelines and roadmaps help you visualize your project's progress and dependencies, making it easy to adapt when priorities shift.</p>
                            </div>
                            <div className="md:w-1/2">
                                <img src="https://picsum.photos/600/400?random=3" alt="Project timeline and tracking illustration" className="rounded-lg shadow-xl"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-4xl font-bold text-gray-900">Bye-bye, spreadsheets.</h2>
                                <p className="mt-4 text-lg text-gray-600">Centralize all your project information in one place. Attach files, add comments, and link issues to keep everything organized and accessible.</p>
                            </div>
                            <div className="md:w-1/2">
                                <img src="https://picsum.photos/600/400?random=4" alt="Centralized information hub illustration" className="rounded-lg shadow-xl"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing CTA Section */}
                <section className="bg-[#0052CC] text-white py-20 text-center">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold">Move fast, stay aligned, and build better - together.</h2>
                        <button className="mt-8 bg-white text-[#0052CC] font-bold py-3 px-10 rounded-md hover:bg-gray-200 transition duration-300">
                            Get it free
                        </button>
                    </div>
                </section>

                {/* Trust Banner */}
                <section className="py-16 bg-white text-center">
                    <div className="container mx-auto px-6">
                        <h3 className="text-2xl text-gray-600">Trusted by over 100,000 customers world-wide</h3>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-gray-400">
                            <SquareIcon />
                            <EBayIcon />
                            <SpotifyIcon className="h-8 w-auto"/>
                            <CiscoIcon />
                        </div>
                    </div>
                </section>

                {/* SEO Article */}
                <SeoArticle />

            </main>
            
            <Footer onOpenModal={openModal} />

            <RewriterModal isOpen={isRewriterModalOpen} onClose={() => setRewriterModalOpen(false)} />
            {activeModal && (
                <Modal 
                    isOpen={!!activeModal} 
                    onClose={closeModal} 
                    title={modalContent[activeModal].title}
                >
                    {modalContent[activeModal].content}
                </Modal>
            )}
        </div>
    );
};

export default App;