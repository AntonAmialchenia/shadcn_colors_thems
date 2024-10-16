import { Cart } from '@/components/Cart';
import { ChangeQtyButtons } from '@/components/ChangeQtyButtons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { User } from '@/components/User';
import { PRODUCTS_DATA } from '@/lib/mockData';
import { useStore } from '@/store/store';
import { ColorSchemeProvider } from './components/ColorSchemeProvider';
import { ModeToggle } from './components/ModeToggle';

export default function App() {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return (
    <ColorSchemeProvider>
      <main className="p-2 h-screen bg-background ">
        <ModeToggle />
        <div className="max-w-sm mx-auto mt-2">
          <div className="flex justify-between">
            <User />
            <Cart />
          </div>
          <h1 className="text-2xl">Products:</h1>
          <div className="space-y-2">
            {PRODUCTS_DATA.map((product) => (
              <Card key={product.id}>
                <CardHeader>{product.title}</CardHeader>
                <CardContent>{product.price}$</CardContent>
                <CardFooter>
                  {cartProducts.find((item) => item.id === product.id) ? (
                    <ChangeQtyButtons productId={product.id} />
                  ) : (
                    <Button
                      onClick={() => addProduct(product)}
                      variant="default">
                      Add to Cart
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </ColorSchemeProvider>
  );
}
