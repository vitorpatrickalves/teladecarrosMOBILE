import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const cars = [
  {
    model: 'Yamaha R1',
    year: '2020',
    color: 'Vermelha',
    type: 'Moto',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop'
  },
  {
    model: 'SW4 - Toyota',
    year: '2023',
    color: 'Cinza',
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&auto=format&fit=crop'
  },
  {
    model: 'Kawasaki Ninja 300',
    year: '2022',
    color: 'Preta',
    type: 'Moto',
    image: 'https://motos.net.br/wp-content/uploads/kawasaki-ninja-300-design.jpg'
  },
  {
    model: 'Dodge RAM',
    year: '2025',
    color: 'Preto',
    type: 'Carro',
    image: 'https://http2.mlstatic.com/D_NQ_NP_602284-MLA80138689839_102024-OO.webp'
  },
  {
    model: 'Lamborghini Aventador',
    year: '2021',
    color: 'Roxa',
    type: 'Supercarro',
    image: 'https://s2-autoesporte.glbimg.com/M3LP5O96N2cTgeaDSo-hWf8rxfg=/0x0:1280x853/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/X/S/SSjzBeSoaAQessJx6xJg/lambofrente.jpg'
  }
];

export default function CarListingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Veículos na garagem do pai rsrs</Text>
      <ScrollView style={styles.scrollView}>
        {cars.map((car, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: car.image }}
              style={styles.carImage}
              resizeMode="cover"
            />
            <View style={styles.carInfo}>
              <Text style={styles.modelText}>{car.model}</Text>
              <Text style={styles.detailText}>Ano: {car.year}</Text>
              <Text style={styles.detailText}>Cor: {car.color}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    color: '#333',
  },
  scrollView: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  carImage: {
    width: '100%',
    height: 200,
  },
  carInfo: {
    padding: 16,
  },
  modelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});
