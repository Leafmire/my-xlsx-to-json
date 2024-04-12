import FileUpload from './components/FileUpload';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold mb-8">
          XLSX to JSON Converter
        </h1>

        <FileUpload />
      </main>
    </div>
  );
};

export default Home;