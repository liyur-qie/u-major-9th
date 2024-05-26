import Link from "next/link";
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <nav className="flex items-center h-20 w-full bg-white">
        <div className="w-5/6 mx-auto flex justify-between items-center">
          <h1 className="text-xl font-light text-gray-700">U△9</h1>
          <ul>
            {
              navItems.map((navItem, index) => (
              <Link
                href={navItem.value}
                key={index}
                className="inline-block text-lg font-light text-gray-700 py-4 px-6"  
              >{ navItem.text }</Link>)
              )
            }
          </ul>
        </div>
      </nav>
      <section>
        <Image src="https://placehold.jp/1920x1080.png" width={1920} height={1080} alt="main visual"></Image>
      </section>
      <section>
        <p className="text-2xl text-center mt-16 mb-24">
          U△9 はどんな組織なのか<br />
          一言で伝える何かのメッセージを書く
        </p>
        <div className="card w-5/6 mx-auto">
          <div className="w-5/6 mx-auto p-8">
            <Image src="https://placehold.jp/1280x720.png" width={1280} height={720} alt="card-image"></Image>
            <p className="card-title text-gray-700 font-bold text-2xl my-8">組織概要</p>
            <p className="card-description text-gray-700 text-base">
              我々は積極的にUI / UX分野の学習と実践に取り組む集団です。<br />
              Figmaに代表されるデザインツールとMaterial Designといったデザインシステムを主な<br />
              学習対象とし、既存のシステムをなぞるだけでなく自ら創造できる人材を目指しています。<br />
            </p>
          </div>
        </div>
        <p className="text-center text-7xl font-thin text-gray-300 my-32">VALUES</p>
      </section>
      <section id="mwv">
        <div>
          <div className="mwv-card">
            <div>
              <p className="mwv-card-word">M</p>
              <p className="mwv-card-title">Misson</p>
              <p className="mwv-card-description">
              Lorem ipsum dolor sit amet consectetur. Augue sapien vitae quam volutpat accumsan pretium. Suscipit in morbi porttitor egestas ac ullamcorper massa faucibus facilisis. 
              </p>
            </div>
          </div>
          <div className="mwv-card">
            <div>
              <p className="mwv-card-word">W</p>
              <p className="mwv-card-title">Want</p>
              <p className="mwv-card-description">
              Lorem ipsum dolor sit amet consectetur. Augue sapien vitae quam volutpat accumsan pretium. Suscipit in morbi porttitor egestas ac ullamcorper massa faucibus facilisis. 
              </p>
            </div>
          </div>
          <div className="mwv-card">
            <div>
              <p className="mwv-card-word">V</p>
              <p className="mwv-card-title">Vision</p>
              <p className="mwv-card-description">
              Lorem ipsum dolor sit amet consectetur. Augue sapien vitae quam volutpat accumsan pretium. Suscipit in morbi porttitor egestas ac ullamcorper massa faucibus facilisis. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="approaches">
        <p className="text-center text-7xl font-thin text-gray-300 my-32">APPROACHES</p>
        <p className="text-center text-3xl mb-16">我々は2つのアプローチを通しUI / UXの理解を深めます</p>
        <div className="flex justify-between w-5/6 mx-auto">
          <div className="card-approaches">
            <Image src="https://placehold.jp/1280x720.png" width={480} height={320} alt="approaches-card"></Image>
            <p className="text-2xl font-bold mt-8 mb-4">実務的アプローチ</p>
            <p>
              互いへのフィードバックを通すことで知見を深め
              今まで当たり前になってしまっていた改善点を発見し
              課題解決によってより高品質なデザインを制作していきます
            </p>
          </div>
          <div className="card-approaches">
            <Image src="https://placehold.jp/1280x720.png" width={480} height={320} alt="approaches-card"></Image>
            <p className="text-2xl font-bold mt-8 mb-4">実務的アプローチ</p>
            <p>
              互いへのフィードバックを通すことで知見を深め
              今まで当たり前になってしまっていた改善点を発見し
              課題解決によってより高品質なデザインを制作していきます
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const navItems = [
  { text: "Activities", value: "/activities"},
  { text: "Values", value: "/values"},
  { text: "Approaches", value: "/approaches"},
  { text: "Products", value: "/producs"},
  { text: "Members", value: "/members"},
]