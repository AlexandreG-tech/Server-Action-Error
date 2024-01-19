'use server';

import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

export async function fetchServerAction(
) {
  const sdk = ThirdwebSDK.fromPrivateKey(
    '4c9bce38e80b8ca4becf87233c3c2bdfbd6ddeea0c19b4e90ba55e78264c8acf',
    Sepolia,
    {
      secretKey: 'ICbgd2RTPkMhn7t89IpRhMu9XgpJUnhCVsRILLOqqj5TxWbMq8YAwrYrHE9Bg4ArISMSuedoBZgsHvuKIDFprA',
    },
  );
  const contractAddress = '0xDCa8B602f0451653f14CAddEC28c2A6121d7F36A';

  const contract = await sdk.getContract(contractAddress);

  if (!(await contract.erc721.claimConditions.canClaim(1))) {
    const reasons =
      await contract.erc721.claimConditions.getClaimIneligibilityReasons(1);
    return reasons;
  } else {
    return 'Can claim';
  }
}