import { cn } from '@/utils/cn';
import { LoaderCircle } from 'lucide-react';

// Definindo um tipo para os tamanhos
type Size = 'sm' | 'md' | 'lg';

interface Props {
  size?: Size;
  color?: string;
}

export default function Spinner({ size = 'md', color = 'white-300' }: Props) {
  const sizeClassMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const className = cn(
    'animate-spin',
    `text-${color} fill-${color} mr-2`,
    sizeClassMap[size],
  );

  return (
    <div role="status">
      <LoaderCircle className={className} />
      <span className="sr-only">Carregando...</span>
    </div>
  );
}