import { useEffect, useState } from 'react';
import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

export default function DisplayData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const sdk = ThirdwebSDK.fromPrivateKey(
        '',
        Sepolia,
        {
          clientId: '',
        },
      );
      const contractAddress = '0xDCa8B602f0451653f14CAddEC28c2A6121d7F36A';
      console.log(contractAddress);
    
      const contract = await sdk.getContract(contractAddress);
    
      if (!(await contract.erc721.claimConditions.canClaim(1))) {
        const reasons =
          await contract.erc721.claimConditions.getClaimIneligibilityReasons(1);
        setData(reasons)
      } else {
        setData('Can claim');
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}