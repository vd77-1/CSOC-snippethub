import React, { useState } from 'react';

type Props = {
  onClose: () => void;
  onAdd: (snippet: { title: string; content: string; category: string }) => void;
};

const AddSnippetModal = ({ onClose, onAdd }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Uncategorized');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill title and content');
      return;
    }
    onAdd({ title, content, category });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
      <form onSubmit={submit} style={{ background: 'white', padding: 20, borderRadius: 8, width: 300 }}>
        <h2>Add Snippet</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ width: '100%', height: 100, marginBottom: 10 }}
        />

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        >
          <option value="Uncategorized">Uncategorized</option>
          <option value="Learnings">📘 Learnings</option>
          <option value="Code Snippets">💻 Code Snippets</option>
          <option value="Favourites">❤️ Favourites</option>
          <option value="Bad time">😓 Bad time</option>
        </select>

        <button type="submit" style={{ marginRight: 10 }}>Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddSnippetModal;
