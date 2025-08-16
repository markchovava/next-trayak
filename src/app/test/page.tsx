import BgVideo from "./_components/BgVideo";



export default function Page() {
  return (
    <div className="relative min-h-screen">
      <BgVideo
        src="/assets/videos/slide.mp4"
        poster="/assets/img/slide.mp4" // Optional
      />
      
      {/* Your page content goes here */}
      <main className="relative z-10 p-8 text-center text-white bg-black bg-opacity-30">
        <h1 className="text-4xl font-bold mb-4">Your Page Content</h1>
        <p className="text-lg">This content will appear over the background video</p>
      </main>
    </div>
  );
}