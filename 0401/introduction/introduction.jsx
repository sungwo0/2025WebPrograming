import React from 'react';

const Introduction = () => {
    const styles = {
      container: "max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-md text-center",
      header: "text-3xl font-bold text-blue-600 mb-4",
      subheader: "text-xl text-gray-700 mb-6",
      section: "mb-6",
      footer: "text-sm text-gray-500 border-t pt-4"
    };

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.header}>신성우</h1>
        <p className={styles.subheader}>웹 개발자 | 대학생생</p>
      </header>
      
      <section className={styles.section}>
        <h2 className="text-2xl font-semibold mb-2">소개</h2>
        <p>안녕하세요! 저는 웹 개발에 대해 공부하고있는 대학생 신성우입니다. 
        사용자 경험을 중심으로 직관적이고 아름다운 인터페이스를 만드는 것을 좋아합니다.</p>
      </section>
      
      <section className={styles.section}>
        <h2 className="text-2xl font-semibold mb-2">기술 스택</h2>
        <ul className="list-disc pl-5">
          <li>React, Next.js</li>
          <li>JavaScript/TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2 className="text-2xl font-semibold mb-2">연락처</h2>
        <div className="flex gap-4">
          <a href="mailto:email@example.com" className="text-blue-500 hover:underline">이메일</a>
          <a href="https://github.com/" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://linkedin.com/" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </section>
      
      <footer className={styles.footer}>
        © 2025 신성우우. 모든 권리 보유.
      </footer>
    </div>
  );
};

export default Introduction;