import React, { useState } from "react";

function ResumeFeedback({ userName, resumeUrl, feedbackLevel }) {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleUpload = () => {
    setIsUploaded(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFeedback("이력서가 명확하고 깔끔하지만, 프로젝트 경험을 더 강조하세요.");
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">안녕하세요, {userName}님 👋</h1>
      <p className="mb-2">이력서 링크: <a href={resumeUrl} className="text-blue-600 underline" target="_blank" rel="noreferrer">{resumeUrl}</a></p>
      <p className="mb-4">피드백 수준: {feedbackLevel}</p>

      {!isUploaded ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={handleUpload}
        >
          이력서 분석 시작
        </button>
      ) : isLoading ? (
        <p>🔄 AI가 분석 중입니다...</p>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">📋 피드백 결과</h2>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
}

// 사용 예시
export default function ResumeFeedbackPage() {
  return (
    <ResumeFeedback
      userName="신성우"
      resumeUrl="https://resume.example.com/jihun"
      feedbackLevel="고급"
    />
  );
}
