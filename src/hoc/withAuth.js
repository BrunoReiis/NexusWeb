import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/authentication';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
