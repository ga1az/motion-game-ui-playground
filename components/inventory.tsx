import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from './ui/button';
import useAddInventory from '@/lib/inventory.hook';
import Potion from '@/public/sprites/items/potion';
import Sword from '@/public/sprites/items/sword';
import { motion } from 'motion/react';

export default function Inventory() {
  const { onClose, isOpen } = useAddInventory();
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Drawer open={isOpen} onOpenChange={onChange}>
      <DrawerContent className="border-4 font-mono border-dashed flex flex-col items-center justify-center">
        <DrawerHeader>
          <DrawerTitle>Inventory</DrawerTitle>
        </DrawerHeader>
        <div className="grid grid-cols-2 grid-rows-2 w-fit gap-1">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
          >
            <p className="absolute font-bold top-1 left-1">1</p>
            <Potion />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
          >
            <p className="absolute font-bold top-1 left-1">2</p>
            <Sword />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
          >
            <p className="absolute font-bold top-1 left-1">3</p>
            <Sword />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="border-2 border-green-900 w-20 h-20 relative"
          >
            <p className="absolute font-bold top-1 left-1">4</p>
            <Potion />
          </motion.div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
