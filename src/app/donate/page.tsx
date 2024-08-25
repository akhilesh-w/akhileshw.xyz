import linker from "../../../components/linker";
import MainLayout from "../../../components/main-layout";

export default function donate() {
  return (
    <MainLayout>
      <div className="max-w-full break-words leading-relaxed">

        <h1 className="leading-tight tracking-tighter text-4xl sm:text-5xl mb-6">the ebeggar</h1>
        <p className="pt-4 pb-4">It's me, the internet beggar</p>

        <div className="space-y-4">
          <p><strong className="text-blue-400 hover:text-pink-500">ETH {linker({ linktext: "(QR)", href: "../MM.png" })}: </strong>0xfC29cb703052A666799AE87FcbCd6640E9b725b8</p>

          <p><strong className="text-blue-400 hover:text-pink-500">SOL {linker({ linktext: "(QR)", href: "../solana.png" })}: </strong>Fp8cysEbh5ohBB4aU8m6ueTDXRJaZ5uw5QbsNw5L8KhH</p>

          <p><strong className="text-blue-400 hover:text-pink-500">BitCoin {linker({ linktext: "(QR)", href: "../Bitcoin.png" })}: </strong>bc1qjnme2udcgjyqxhkrze33hwgrw8wx7xkghm2t26</p>

          <p><strong className="text-blue-400 hover:text-pink-500">Monero {linker({ linktext: "(QR)", href: "../monero.png" })}: </strong>47anVWGq7Ed4JDM5WyZWAkdq7fSzpNJWZ4KZuSKCgqM8FcFMSCvMSAxggJrCgqid7EMeNjtgBAChU7akXYoiinu25VkGAWE</p>
        </div>
      </div>
    </MainLayout>
  )
}
