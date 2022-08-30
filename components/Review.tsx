import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

const Review = ({ title, description, image }: Props) => (
  <article className='border-white border-4 rounded-2xl p-4 flex flex-col items-center'>
    <div className='w-1/2'>
      <Image
        className='rounded-full overflow-hidden'
        src={image}
        alt='Cricut explore air 2 image'
      />
    </div>
    <h3 className='mb-2 text-xl font-semibold text-center'>{title}</h3>
    <p className='text-center'>{description}</p>
  </article>
);

export default Review;
