
import React from 'react';

interface FooterProps {
    onOpenModal: (modalName: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
    const legalLinks = ['Privacy Policy', 'Terms of Service', 'DMCA'];
    const otherLinks = ['About', 'Contact', 'Guide'];

    return (
        <footer className="bg-gray-50 text-gray-600">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Branding & Contact */}
                    <div>
                        <h3 className="text-xl font-bold text-[#0052CC]">doodax</h3>
                        <p className="mt-4">Connect with us:</p>
                        <p className="mt-2"><a href="mailto:hsini.web@gmail.com" className="hover:text-[#0052CC]">hsini.web@gmail.com</a></p>
                        <p className="mt-2"><a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0052CC]">doodax.com</a></p>
                        <div className="mt-4">
                            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold" style={{color: '#FFD700'}}>
                                Powered by HSINI MOHAMED
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h4 className="font-bold text-gray-800">Products</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-[#0052CC]">Software</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Align</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Service Management</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Collaboration Tools</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="font-bold text-gray-800">Resources</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-[#0052CC]">Blog</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Community</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Support</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Marketplace</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Learn */}
                    <div>
                        <h4 className="font-bold text-gray-800">Learn</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-[#0052CC]">Agile</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Scrum</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">DevOps</a></li>
                            <li><a href="#" className="hover:text-[#0052CC]">Kanban</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500">Copyright © 2025 doodax.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {otherLinks.map(link => (
                            <button key={link} onClick={() => onOpenModal(link)} className="hover:text-[#0052CC]">{link}</button>
                        ))}
                        {legalLinks.map(link => (
                            <button key={link} onClick={() => onOpenModal(link)} className="hover:text-[#0052CC]">{link}</button>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;