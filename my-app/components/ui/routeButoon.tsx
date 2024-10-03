import Link from 'next/link'



export default function RouteButton(props: {
  linkUrl: string,
} = {
  linkUrl: 'https://example.com',
}) {
  return (
    <Link 
      href={props.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block overflow-hidden rounded-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      
    </Link>
  );
}
