import Image from 'next/image';
import pg1 from '../../app/Assets/page1.webp';
import pg2 from '../../app/Assets/page2.webp';
import pg3 from '../../app/Assets/page3.webp';
import pg4 from '../../app/Assets/page4.webp';
import pg5 from '../../app/Assets/page5.webp';

const Screenshot = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 w-max p-8">
        {/* Image 1 */}
        <div className="flex-none w-64 h-128">
          <Image
            src={pg2}
            alt="App Screenshot"
            width={256}
            height={512}
            className="rounded-2xl shadow-lg"
          />
        </div>
        {/* Image 2 */}
        <div className="flex-none w-64 h-128">
          <Image
            src={pg3}
            alt="App Screenshot"
            width={256}
            height={512}
            className="rounded-2xl shadow-lg"
          />
        </div>
        {/* Image 3 */}
        <div className="flex-none w-64 h-128">
          <Image
            src={pg1}
            alt="App Screenshot"
            width={256}
            height={512}
            className="rounded-2xl shadow-lg"
          />
        </div>
        {/* Image 4 */}
        <div className="flex-none w-64 h-128">
          <Image
            src={pg4}
            alt="App Screenshot"
            width={256}
            height={512}
            className="rounded-2xl shadow-lg"
          />
        </div>
        {/* Image 5 */}
        <div className="flex-none w-64 h-128">
          <Image
            src={pg5}
            alt="App Screenshot"
            width={256}
            height={512}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Screenshot;
