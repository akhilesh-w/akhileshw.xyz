import linker from "../../../components/linker";
import MainLayout from "../../../components/main-layout";

export default function donate() {
  return (
    <MainLayout>
      <div className="max-w-full break-words leading-relaxed">

        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6 appear stagger-1">the ebeggar</h1>
        <p className="pt-4 pb-4 appear stagger-2">It's me, the internet beggar</p>

        <div className="space-y-4">
          {[
            { tag: "ETH", color: "text-blue-400", qr: "../MM.png", address: "0xfC29cb703052A666799AE87FcbCd6640E9b725b8" },
            { tag: "SOL", color: "text-blue-400", qr: "../solana.png", address: "Fp8cysEbh5ohBB4aU8m6ueTDXRJaZ5uw5QbsNw5L8KhH" },
            { tag: "BitCoin", color: "text-blue-400", qr: "../Bitcoin.png", address: "bc1qjnme2udcgjyqxhkrze33hwgrw8wx7xkghm2t26" },
            { tag: "Monero", color: "text-blue-400", qr: "../monero.png", address: "47anVWGq7Ed4JDM5WyZWAkdq7fSzpNJWZ4KZuSKCgqM8FcFMSCvMSAxggJrCgqid7EMeNjtgBAChU7akXYoiinu25VkGAWE" }
          ].map((coin, index) => (
            <p key={coin.tag} className={`appear stagger-${Math.min(index + 3, 5)}`}>
              <strong className={`${coin.color} hover:text-pink-500`}>{coin.tag} {linker({ linktext: "(QR)", href: coin.qr })}: </strong>
              {coin.address}
            </p>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
