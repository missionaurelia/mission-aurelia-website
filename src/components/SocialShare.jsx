import { useState } from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link2, Check } from 'lucide-react';

export default function SocialShare({ title, description, url }) {
  const [copied, setCopied] = useState(false);
  
  // Use current URL if not provided
  const shareUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-gray-400">
        <Share2 className="w-5 h-5" />
        <span className="text-sm font-medium">Share:</span>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Twitter */}
        <button
          onClick={() => handleShare('twitter')}
          className="p-2 rounded-lg bg-white/5 hover:bg-[#1DA1F2]/20 text-gray-400 hover:text-[#1DA1F2] transition-colors border border-white/10 hover:border-[#1DA1F2]/50"
          title="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
        </button>

        {/* Facebook */}
        <button
          onClick={() => handleShare('facebook')}
          className="p-2 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 text-gray-400 hover:text-[#1877F2] transition-colors border border-white/10 hover:border-[#1877F2]/50"
          title="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handleShare('linkedin')}
          className="p-2 rounded-lg bg-white/5 hover:bg-[#0A66C2]/20 text-gray-400 hover:text-[#0A66C2] transition-colors border border-white/10 hover:border-[#0A66C2]/50"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`p-2 rounded-lg transition-colors border ${
            copied
              ? 'bg-green-500/20 text-green-400 border-green-500/50'
              : 'bg-white/5 hover:bg-[#FF6B35]/20 text-gray-400 hover:text-[#FF6B35] border-white/10 hover:border-[#FF6B35]/50'
          }`}
          title={copied ? 'Link copied!' : 'Copy link'}
        >
          {copied ? <Check className="w-5 h-5" /> : <Link2 className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}
