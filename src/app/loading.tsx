import { PawPrint } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-primary">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center gap-3">
          <div className="animate-bounce [animation-delay:-0.3s]">
            <PawPrint className="h-10 w-10 text-content-brand" />
          </div>
          <div className="animate-bounce [animation-delay:-0.15s]">
            <PawPrint className="h-10 w-10 text-content-brand" />
          </div>
          <div className="animate-bounce">
            <PawPrint className="h-10 w-10 text-content-brand" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-content-primary text-paragraph-medium-size font-medium">
            Carregando
          </span>
          <div className="flex gap-1">
            <span className="animate-pulse text-content-brand">.</span>
            <span className="animate-pulse [animation-delay:0.2s] text-content-brand">
              .
            </span>
            <span className="animate-pulse [animation-delay:0.4s] text-content-brand">
              .
            </span>
          </div>
        </div>

        <div className="relative h-1 w-40 overflow-hidden rounded-full bg-background-tertiary">
          <div className="absolute h-full w-1/3 animate-loading-bar rounded-full bg-content-brand"></div>
        </div>
      </div>
    </div>
  );
}
