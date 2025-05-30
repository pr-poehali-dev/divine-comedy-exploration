
const Hero = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          «Божественная комедия» Данте
        </h1>
        <p className="text-xl md:text-2xl">
          История создания и общая характеристика эпохального произведения
        </p>
      </div>
    </div>
  );
};

export default Hero;
