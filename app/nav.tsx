import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'menu'> {}

export default function Nav({className}: NavProps) {
  return (
    <menu
      className={clsx(
        className,
        'flex shrink-0 uppercase leading-none text-white',
        'gap-5 sm:gap-10',
        'px-4 py-3 lg:px-5 lg:py-6',
        'text-xl lg:text-2xl 2xl:text-3xl 3xl:text-[31px]',
        '[&_a]:block',
        '[&_li:hover_a]:underline'
      )}
    >
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#meme'>Meme</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#tokenomics'>TOKENoMICS</a>
      </li>
    </menu>
  );
}
