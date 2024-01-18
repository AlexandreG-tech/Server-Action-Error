'use server';

import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { NextResponse } from 'next/server';

export async function GET() {
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
      return NextResponse.json({ reasons });
    } else {
    return NextResponse.json({ message: 'Can claim' });
  }
}