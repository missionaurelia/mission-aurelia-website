import { useState, useEffect } from 'react';
import { MessageCircle, Send, Trash2 } from 'lucide-react';

export default function Comments({ spotlightId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments from localStorage on mount
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${spotlightId}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [spotlightId]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments_${spotlightId}`, JSON.stringify(comments));
    } else {
      // Remove from localStorage if no comments
      localStorage.removeItem(`comments_${spotlightId}`);
    }
  }, [comments, spotlightId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newComment.trim() || !userName.trim()) {
      return;
    }

    setIsSubmitting(true);

    const comment = {
      id: Date.now().toString(),
      author: userName.trim(),
      text: newComment.trim(),
      timestamp: new Date().toISOString(),
    };

    setComments([comment, ...comments]);
    setNewComment('');
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 500);
  };

  const handleDelete = (commentId) => {
    const updatedComments = comments.filter(c => c.id !== commentId);
    setComments(updatedComments);
    
    // Immediately update localStorage
    if (updatedComments.length > 0) {
      localStorage.setItem(`comments_${spotlightId}`, JSON.stringify(updatedComments));
    } else {
      localStorage.removeItem(`comments_${spotlightId}`);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-6 h-6 text-[#FF6B35]" />
        <h3 className="text-2xl font-bold text-white">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white/5 rounded-lg p-6 border border-white/10">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35]"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows="3"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] resize-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !newComment.trim() || !userName.trim()}
          className="flex items-center gap-2 px-6 py-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div 
              key={comment.id} 
              className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-semibold text-white mb-1">
                    {comment.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(comment.timestamp)}
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-gray-500 hover:text-red-400 transition-colors"
                  title="Delete comment"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-300 whitespace-pre-wrap">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Note about local storage */}
      <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-sm text-blue-300">
          <strong>Note:</strong> Comments are currently stored locally in your browser. 
          They will be visible only to you until a backend system is implemented.
        </p>
      </div>
    </div>
  );
}
