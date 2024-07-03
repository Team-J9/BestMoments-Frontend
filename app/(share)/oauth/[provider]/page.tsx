import GoogleCallback from '@/components/Auth/GoogleCallback';

const OAuthProviderPage = ({ params }: { params: { provider: string } }) => {
  return (
    <div>
      {params.provider} 페이지
      <GoogleCallback provider={params.provider} />
    </div>
  );
};

export default OAuthProviderPage;
