import Image, { StaticImageData } from 'next/image';

type Props = {
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
};

const Review = ({ name, title, description, image }: Props) => (
  <article className='border-white border-4 text-white rounded-2xl p-4 flex flex-col items-center'>
    <div className='w-1/2'>
      <Image
        className='rounded-xl overflow-hidden'
        src={image}
        alt='Cricut explore air 2 image'
      />
    </div>
    <h3 className='mb-2'>
      {name} - <strong>{title}</strong>
    </h3>
    <p>{description}</p>
  </article>
);

export default Review;
