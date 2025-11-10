// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  titleEn: string;
  category: 'architectural' | 'interior' | 'landscape';
  categoryAr: string;
  categoryEn: string;
  city: string;
  cityEn: string;
  year: string;
  image: string; // Main image
  images: string[]; // Gallery images
  description: string;
  descriptionEn: string;
  details?: string;
  detailsEn?: string;
  area?: string;
  client?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'فيلا العائلة الملكية',
    titleEn: 'Royal Family Villa',
    category: 'architectural',
    categoryAr: 'التصميم المعماري',
    categoryEn: 'Architectural Design',
    city: 'الرياض',
    cityEn: 'Riyadh',
    year: '2023',
    image: '/imags/1.jpg',
    images: [
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
    ],
    description: 'تصميم معماري فاخر يجمع بين الأصالة والحداثة، مع مساحات واسعة وحدائق خضراء',
    descriptionEn: 'Luxurious architectural design combining authenticity and modernity, with spacious areas and green gardens',
    details: 'مشروع فيلا فاخرة تجمع بين التصميم المعماري السعودي التقليدي والحديث',
    detailsEn: 'A luxury villa project combining traditional and modern Saudi architectural design',
    area: '1200 م²',
    client: 'عميل خاص',

  },
  {
    id: '2',
    title: 'مجمع إكسبو التجاري',
    titleEn: 'Expo Commercial Complex',
    category: 'architectural',
    categoryAr: 'التصميم المعماري',
    categoryEn: 'Architectural Design',
    city: 'دبي',
    cityEn: 'Dubai',
    year: '2023',
    image: '/imags/2.jpg',
    images: [
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
    ],
    description: 'مشروع معماري ضخم للمدينة المستقبلية بتصميم عصري ومستدام',
    descriptionEn: 'Massive architectural project for a futuristic city with modern and sustainable design',
    details: 'مجمع تجاري متكامل يضم مكاتب، محلات تجارية، ومساحات ترفيهية',
    detailsEn: 'Integrated commercial complex including offices, shops, and entertainment spaces',
    area: '25000 م²',
    client: 'شركة إكسبو العالمية'
  },
  {
    id: '3',
    title: 'شقة البنتهاوس الفاخرة',
    titleEn: 'Luxury Penthouse Apartment',
    category: 'interior',
    categoryAr: 'التصميم الداخلي',
    categoryEn: 'Interior Design',
    city: 'جدة',
    cityEn: 'Jeddah',
    year: '2024',
    image: '/imags/3.jpg',
    images: [
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
    ],
    description: 'تصميم داخلي عصري بلمسات فنية راقية وإطلالات بانورامية على البحر',
    descriptionEn: 'Modern interior design with elegant artistic touches and panoramic sea views',
    details: 'شقة بنتهاوس بمساحة واسعة تتميز بالفخامة والراحة',
    detailsEn: 'Spacious penthouse apartment featuring luxury and comfort',
    area: '450 م²',
    client: 'عميل خاص',
  },
  {
    id: '4',
    title: 'حديقة القصر الملكي',
    titleEn: 'Royal Palace Garden',
    category: 'landscape',
    categoryAr: 'تصميم الحدائق',
    categoryEn: 'Landscape Design',
    city: 'الرياض',
    cityEn: 'Riyadh',
    year: '2023',
    image: '/imags/4.jpg',
    images: [
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
    ],
    description: 'حديقة خضراء مستدامة بتصميم عصري يجمع بين الجمال والوظيفة',
    descriptionEn: 'Sustainable green garden with modern design combining beauty and functionality',
    details: 'حديقة قصر ملكي بمساحات خضراء واسعة ونوافير مائية',
    detailsEn: 'Royal palace garden with extensive green spaces and water fountains',
    area: '5000 م²',
    client: 'الديوان الملكي'
  },
  {
    id: '5',
    title: 'مجمع سكني حديث',
    titleEn: 'Modern Residential Complex',
    category: 'architectural',
    categoryAr: 'التصميم المعماري',
    categoryEn: 'Architectural Design',
    city: 'الدمام',
    cityEn: 'Dammam',
    year: '2024',
    image: '/imags/1.jpg',
    images: [
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
    ],
    description: 'مجمع سكني متكامل بمرافق عصرية ومساحات خضراء',
    descriptionEn: 'Integrated residential complex with modern facilities and green spaces',
    details: 'مجمع سكني يضم 120 وحدة سكنية بتصميم عصري',
    detailsEn: 'Residential complex with 120 units featuring modern design',
    area: '15000 م²',
    client: 'شركة التطوير العقاري'
  },
  {
    id: '6',
    title: 'مكتب تنفيذي فاخر',
    titleEn: 'Luxury Executive Office',
    category: 'interior',
    categoryAr: 'التصميم الداخلي',
    categoryEn: 'Interior Design',
    city: 'الرياض',
    cityEn: 'Riyadh',
    year: '2023',
    image: '/imags/2.jpg',
    images: [
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
    ],
    description: 'تصميم مكتب تنفيذي بأعلى معايير الفخامة والاحترافية',
    descriptionEn: 'Executive office design with the highest standards of luxury and professionalism',
    details: 'مكتب تنفيذي يجمع بين الفخامة والعملية',
    detailsEn: 'Executive office combining luxury and practicality',
    area: '200 م²',
    client: 'شركة استثمارية'
  },
  {
    id: '7',
    title: 'منتزه عائلي',
    titleEn: 'Family Park',
    category: 'landscape',
    categoryAr: 'تصميم الحدائق',
    categoryEn: 'Landscape Design',
    city: 'جدة',
    cityEn: 'Jeddah',
    year: '2024',
    image: '/imags/3.jpg',
    images: [
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
      '/imags/1.jpg',
    ],
    description: 'منتزه عائلي بمساحات خضراء واسعة ومرافق ترفيهية',
    descriptionEn: 'Family park with extensive green spaces and recreational facilities',
    details: 'منتزه عائلي يوفر بيئة طبيعية للعائلات',
    detailsEn: 'Family park providing a natural environment for families',
    area: '8000 م²',
    client: 'أمانة جدة'
  },
  {
    id: '8',
    title: 'برج الأعمال',
    titleEn: 'Business Tower',
    category: 'architectural',
    categoryAr: 'التصميم المعماري',
    categoryEn: 'Architectural Design',
    city: 'الرياض',
    cityEn: 'Riyadh',
    year: '2023',
    image: '/imags/4.jpg',
    images: [
      '/imags/4.jpg',
      '/imags/4.jpg',
      '/imags/4.jpg',
      '/imags/4.jpg',
    ],
    description: 'برج أعمال بتصميم معماري مميز وإطلالات خلابة',
    descriptionEn: 'Business tower with distinctive architectural design and stunning views',
    details: 'برج أعمال من 30 طابق بتصميم عصري',
    detailsEn: '30-story business tower with modern design',
    area: '40000 م²',
    client: 'شركة الأعمال المتحدة'
  }
];