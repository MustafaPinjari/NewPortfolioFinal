import Image from 'next/image';
import { Highlighter } from '../components/ui/highlighter';

export default function Occupation() {
  return (
    <section className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
      <div className="text-center pt-2 md:pt-0 md:text-left">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
          <Highlighter action="highlight" color="#3B82F6">
            Mustafa Pinjari
          </Highlighter>
        </h1>
        <h2 className="text-sm font-normal md:text-base">
          Co-founder @{' '}
          <Highlighter action="underline" color="#F59E0B">
            Techentrance
          </Highlighter>
        </h2>
      </div>
      <div>
        <Image
          alt="Mustafa Pinjari"
          height={130}
          width={130}
          src="/static/images/avatar.webp"
          className="rounded-full object-scale-down"
        />
      </div>
    </section>
  );
}
