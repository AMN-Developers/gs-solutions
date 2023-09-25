import Head from 'next/head';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>G&S Home Solutions | Compre seus produtos aqui!</title>
        <meta name="description" content="Compre seus produtos aqui!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="http://localhost:3000" />
      </Head>
      <Header.Root>
        <Header.TopBar />
      </Header.Root>
      <main>
        {children}
      </main>
    </>
  )
}