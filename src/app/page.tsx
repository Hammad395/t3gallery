import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/78fa1971-9de8-4bdf-902d-b80329dcf0bd-2c2o.jpg",
  "https://utfs.io/f/e319e8c7-fcb3-4c96-ac62-8cb09618807d-20znjw.jpg",
  "https://utfs.io/f/0722ea9c-3591-40e2-9c81-6d9a6297c66d-gp2m7d.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="" width={200} height={100} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
