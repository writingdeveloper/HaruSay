import { getTranslations } from 'next-intl/server';

// 클라이언트 컴포넌트 import
import { Hello } from '@/components/Hello';
import { QuillEditor } from '@/components/QuillEditor';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

const Dashboard = () => (
  <div
    className="[&_p]:my-6"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff',
    }}
  >
    <Hello />
    <QuillEditor />
  </div>
);

export default Dashboard;
