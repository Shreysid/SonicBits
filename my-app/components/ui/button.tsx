import Link from 'next/link'
import Image from 'next/image';
import AppStore from "../../app/Assets/appStore.svg"

export default function Button(props: {
  linkUrl: string,
  width: number,
  height: number,
  
} = {
  linkUrl: 'https://example.com',
  width: 300,
  height: 300
}) {
  return (
    <Link 
      href={props.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block overflow-hidden rounded-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <Image
                  // fill
                  src={AppStore}
                  width={props.width || 300}
                  height={props.height || 300} 
                  alt={""}      
                  /> 
    </Link>
  );
}
