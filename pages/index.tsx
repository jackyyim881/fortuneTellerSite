import CompatibilityForm from '../components/CompatibilityForm';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-4">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-8">愛情兼容性計算機</h1>
          <CompatibilityForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
