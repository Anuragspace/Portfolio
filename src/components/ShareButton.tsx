
import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  message?: string;
  url?: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  message = "Check out this amazing portfolio!",
  url = window.location.href,
  className = ""
}) => {
  const [showDialog, setShowDialog] = useState(false);
  
  const shareData = {
    title: 'Portfolio Share',
    text: message,
    url: url
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
        setShowDialog(true);
      }
    } else {
      // Fallback for browsers that don't support native sharing
      setShowDialog(true);
    }
  };
  
  const closeDialog = () => {
    setShowDialog(false);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setShowDialog(false);
  };

  return (
    <>
      <button 
        onClick={handleShare}
        className={`flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-[#3E40EF] ${className}`}
      >
        <Share2 className="h-4 w-4" />
        <span>Share Portfolio</span>
      </button>
      
      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={closeDialog}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl p-5 max-w-sm w-[90%] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-3">Share this portfolio</h3>
              <div className="grid grid-cols-4 gap-3 mb-4">
                <button className="flex flex-col items-center justify-center p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  <i className="fab fa-facebook-f mb-1"></i>
                  <span className="text-xs">Facebook</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
                  <i className="fab fa-twitter mb-1"></i>
                  <span className="text-xs">Twitter</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  <i className="fab fa-whatsapp mb-1"></i>
                  <span className="text-xs">WhatsApp</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
                  <i className="fab fa-linkedin-in mb-1"></i>
                  <span className="text-xs">LinkedIn</span>
                </button>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg mb-4">
                <input 
                  type="text" 
                  value={url} 
                  readOnly 
                  className="bg-transparent flex-1 outline-none text-sm"
                />
                <button 
                  onClick={copyToClipboard}
                  className="bg-[#3E40EF] text-white px-3 py-1 rounded-md text-sm hover:bg-[#3E40EF]/90"
                >
                  Copy
                </button>
              </div>
              <button 
                onClick={closeDialog}
                className="w-full py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShareButton;
