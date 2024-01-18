import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sdk = ThirdwebSDK.fromPrivateKey(
    '',
    Sepolia,
    {
      secretKey: '',
    },
  );
  const contractAddress = '0xDCa8B602f0451653f14CAddEC28c2A6121d7F36A';
  console.log(contractAddress);

  const contract = await sdk.getContract(contractAddress);

  if (!(await contract.erc721.claimConditions.canClaim(1))) {
    const reasons =
      await contract.erc721.claimConditions.getClaimIneligibilityReasons(1);
    res.status(200).json({ reasons });
  } else {
    res.status(200).json({ message: 'Can claim' });
  }
}