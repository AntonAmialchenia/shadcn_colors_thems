import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useColorSchemeStore } from '@/store/useColorSchemeStore';
import { cn } from '@/lib/utils';
import { ColorSet } from '@/lib/colorSchemes';

type ColorSetItem = {
  name: string;
  value: ColorSet;
  bg: string;
};

const colorSets: ColorSetItem[] = [
  { name: 'Slate', value: 'slate', bg: 'bg-[hsl(215.3_19.3%_34.5%)]' },
  { name: 'Green', value: 'green', bg: 'bg-[hsl(142.1_70.6%_45.3%)]' },
  { name: 'Blue', value: 'blue', bg: 'bg-[hsl(217.2_91.2%_59.8%)]' },
];

export function ModeToggle() {
  const { setColorSet, setColorMode, currentSet } = useColorSchemeStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Toggle theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="mb-5">
          <p className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base mb-2">
            Colors
          </p>
          {colorSets.map((item) => (
            <Button
              className={cn(`flex items-center gap-2`, {
                'border-2 border-primary': currentSet === item.value,
              })}
              variant="outline"
              onClick={() => setColorSet(item.value)}>
              <div className={cn(`h-4 w-4 rounded-full`, item.bg)} />
              {item.name}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="flex items-center gap-2"
            variant="outline"
            onClick={() => setColorMode('light')}>
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            Light
          </Button>
          <Button
            className="flex items-center gap-2"
            variant="outline"
            onClick={() => setColorMode('dark')}>
            <Moon className="h-[1.2rem] w-[1.2rem]" /> Dark
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
