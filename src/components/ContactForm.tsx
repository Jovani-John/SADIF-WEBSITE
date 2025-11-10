// ContactForm.tsx
'use client';  // أضف ده في الأول
import { useState } from 'react';
import DOMPurify from 'dompurify';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      message: DOMPurify.sanitize(formData.message),
    };
    // إرسال عبر Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_KEY', // استبدل بـ API key الخاص بك
        ...sanitizedData,
      }),
    });
    if (response.ok) alert('تم الإرسال بنجاح!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="الاسم"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="email"
        placeholder="الإيميل"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-3 border rounded"
        required
      />
      <textarea
        placeholder="الرسالة"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full p-3 border rounded"
        rows={5}
        required
      />
      <button type="submit" className="bg-primary text-white px-6 py-3 rounded hover:bg-accent transition">
        إرسال
      </button>
    </form>
  );
}