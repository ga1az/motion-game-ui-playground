'use client';
import SkeletonCharacter from '@/components/skeleton';
import { BackpackIcon, ShoppingCartIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import useAddInventory from '@/lib/inventory.hook';
import useShop from '@/lib/shop.hook';
import ModalProvider from '@/components/modal.provider';
import { cn } from '@/lib/utils';
import useMoney from '@/lib/money.hook';

const headingVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export default function Home() {
  const [armor, setArmor] = useState(false);
  const handleOpenInventory = useAddInventory();
  const handleOpenShop = useShop();
  import { toast } from "sonner"
  const { money, addMoney, spendMoney } = useMoney();

  const handleClick = () => {
    const randomChance = Math.random();
    if (randomChance < 0.5) {
      addMoney(1);
    } else {
      addMoney(5);
    }
  };

  const handleEvolution = () => {
    if (money >= 2000) {
      spendMoney(2000);
      setArmor(!armor);
    } else {
      toast('Not enough money for evolution!',style: {
          fontFamily: 'monospace',
        },);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <ModalProvider />
      <div
        className={cn(
          'flex flex-col border-2  p-2 rounded-2xl w-50 relative',
          armor ? 'border-blue-500' : 'border-gray-500',
        )}
      >
        <div className="absolute flex flex-col gap-2 justify-between left-2 top-10">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <BackpackIcon
                    size={30}
                    className="text-gray-300 hover:text-white transition-all"
                    onClick={handleOpenInventory.onOpen}
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-mono">Open Inventory</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <ShoppingCartIcon
                    size={30}
                    className="text-gray-300 hover:text-white transition-all"
                    onClick={handleOpenShop.onOpen}
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-mono">Open Shop</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex justify-center bg-gray-800 rounded-3xl font-bold text-white transition-all">
          <AnimatePresence mode="wait">
            {armor ? (
              <motion.h1
                key="weapon"
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="select-none"
              >
                Super Skeleton
              </motion.h1>
            ) : (
              <motion.h1
                key="base"
                variants={headingVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="select-none"
              >
                Skeleton
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        <SkeletonCharacter withWeapon={armor} />
        <motion.div whileTap={{ scale: 0.9 }}>
          <button
            className="border-4 border-black bg-gray-300 text-black font-bold py-2 px-4 w-full cursor-pointer font-mono select-none"
            onClick={handleEvolution}
          >
            {armor ? 'Downgrade' : 'Evolution'}
          </button>
        </motion.div>
        <div className="mt-4">
          <p className="font-mono text-white">Money: ${money}</p>
        </div>
        <div className="mt-4">
          <motion.div whileTap={{ scale: 0.9 }}>
            <button
              className="border-4 border-black bg-gray-300 text-black font-bold py-2 px-4 w-full cursor-pointer font-mono select-none"
              onClick={handleClick}
            >
              Click to Earn Money
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
