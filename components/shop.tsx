import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import useShop from '@/lib/shop.hook';

export default function Shop() {
  const { isOpen, onClose } = useShop();
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
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
          >
            <p className="absolute font-bold top-1 left-1">Item 1 - $10</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
          >
            <p className="absolute font-bold top-1 left-1">Item 2 - $20</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
          >
            <p className="absolute font-bold top-1 left-1">Item 3 - $30</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
          >
            <p className="absolute font-bold top-1 left-1">Item 4 - $40</p>
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
