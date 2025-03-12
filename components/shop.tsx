import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import useShop from '@/lib/shop.hook';
import useMoney from '@/lib/money.hook';
import { toast } from "sonner"

export default function Shop() {
  const { isOpen, onClose } = useShop();
  const { money, spendMoney } = useMoney();
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handlePurchase = (amount: number, type: string) => {
    if (money >= amount) {
      spendMoney(amount);
      if (type === 'multiplier') {
        setMoneyMultiplier((prev) => prev + 0.1);
      }
      toast.success('Item purchased successfully!', {
        style: {
          background: 'green',
          color: 'white',
          fontFamily: 'monospace',
        },
      });
    } else {
      toast.error('Not enough money to purchase this item.', {
        style: {
          background: 'red',
          color: 'white',
          fontFamily: 'monospace',
        },
      });
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onChange}>
      <DrawerContent className="border-4 font-mono border-dashed flex flex-col items-center justify-center">
        <DrawerHeader>
          <DrawerTitle>Shop</DrawerTitle>
        </DrawerHeader>
        <div className="grid grid-cols-2 grid-rows-2 w-fit gap-1">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
            onClick={() => handlePurchase(10, 'item')}
          >
            <p className="absolute font-bold top-1 left-1">Item 1 - $10</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
            onClick={() => handlePurchase(20, 'item')}
          >
            <p className="absolute font-bold top-1 left-1">Item 2 - $20</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
            onClick={() => handlePurchase(30, 'item')}
          >
            <p className="absolute font-bold top-1 left-1">Item 3 - $30</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
            onClick={() => handlePurchase(40, 'item')}
          >
            <p className="absolute font-bold top-1 left-1">Item 4 - $40</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
            onClick={() => handlePurchase(50, 'multiplier')}
          >
            <p className="absolute font-bold top-1 left-1">Multiplier +0.1 - $50</p>
          </motion.div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
