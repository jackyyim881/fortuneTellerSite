import ResultDisplay from '../components/ResultDisplay';

const Result: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-white mb-8">分析結果</h1>
        <ResultDisplay />
      </div>
    </div>
  );
};

export default Result;
