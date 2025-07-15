
import Controlled from "../components/home/Controlled";
import { FileUploadDemo } from "../components/home/FileUpload";

export function Home() {
  return (
    <main className="grid w-full justify-center gap-6">
      <header className="mt-4 mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500">
            {/* <FileSpreadsheet className="h-6 w-6 text-white" /> */}
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Sistema de Carga de Datos
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          Gobierno de Colombia - Ministerio de Tecnologías de la Información
        </p>
        <p className="mt-2 flex text-sm justify-center text-gray-600">
          Plataforma Oficial
        </p>
      </header>
      <section className="flex w-full items-center gap-6">
        <FileUploadDemo />
        <Controlled />
      </section>
    </main>
  );
};
