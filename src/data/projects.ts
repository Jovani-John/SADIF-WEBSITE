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
    title: 'شوبينج مول في تبوك',
    titleEn: 'Shopping Mall in Tabuk',
    category: 'architectural',
    categoryAr: 'التصميم المعماري',
    categoryEn: 'Architectural Design',
    city: '',
    cityEn: '',
    year: '',
    image: '/imags/Projects/architectural/ShoppingMallTobouk/1.jpg',
    images: [
      '/imags/Projects/architectural/ShoppingMallTobouk/1.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/2.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/3.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/4.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/5.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/6.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/7.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/8.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/9.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/10.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/11.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/12.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/13.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/14.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/15.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/16.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/18.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/19.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/20.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/21.jpg',
      '/imags/Projects/architectural/ShoppingMallTobouk/22.jpg',
    ],
description: 'تصميم مول تجاري فاخر يجمع بين الحداثة والراحة، مع مساحات واسعة وممرات تسوق مفتوحة',
descriptionEn: 'A luxurious mall design combining modernity and comfort, with spacious areas and open shopping corridors',
details: 'مشروع مول تجاري متكامل بتصميم عصري يضم متاجر متنوعة، مناطق ترفيه، مطاعم، ومساحات خضراء مهيأة للزوار',
detailsEn: 'A fully integrated commercial mall project with a contemporary design featuring diverse shops, entertainment areas, restaurants, and visitor-friendly green spaces',
    // area: '1200 م²',
    client: 'Shopping Mall',
  },
  {
  id: '18',
  title: 'فيلا خاصه',
  titleEn: 'Private villa',
  category: 'architectural',
  categoryAr: 'التصميم المعماري',
  categoryEn: 'Architectural Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/architectural/VillaKamal/1.jpg',
  images: [
    '/imags/Projects/architectural/VillaKamal/1.jpg',
    '/imags/Projects/architectural/VillaKamal/2.jpg',
    '/imags/Projects/architectural/VillaKamal/3.jpg',
    '/imags/Projects/architectural/VillaKamal/4.jpg',
    '/imags/Projects/architectural/VillaKamal/5.jpg',
    '/imags/Projects/architectural/VillaKamal/6.jpg',
  ],
  description: 'تصميم معماري حديث لفيلا فاخرة، يجمع بين الجمالية والراحة مع استغلال مثالي للمساحات.',
  descriptionEn: 'Modern architectural design for a luxury villa, combining aesthetics and comfort with optimal space utilization.',
  details: 'شمل المشروع تصميم الواجهة الخارجية، المساحات الداخلية، الحدائق والمرافق الخاصة، مع الاهتمام بأدق التفاصيل لتوفير تجربة معيشية متكاملة.',
  detailsEn: 'The project included the exterior facade, interior spaces, gardens, and private amenities, focusing on fine details to provide a complete living experience.',
  client: 'Private villa',
},
{
  id: '19',
  title: '',
  titleEn: '',
  category: 'architectural',
  categoryAr: 'التصميم المعماري',
  categoryEn: 'Architectural Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/architectural/Signage/1.jpg',
  images: [
    '/imags/Projects/architectural/Signage/1.jpg',
    '/imags/Projects/architectural/Signage/2.jpg',
    '/imags/Projects/architectural/Signage/3.jpg',
    '/imags/Projects/architectural/Signage/4.jpg',
    '/imags/Projects/architectural/Signage/5.jpg',
    '/imags/Projects/architectural/Signage/6.jpg',
    '/imags/Projects/architectural/Signage/7.jpg',
    '/imags/Projects/architectural/Signage/8.jpg',
    '/imags/Projects/architectural/Signage/9.jpg',
    '/imags/Projects/architectural/Signage/10.jpg',
    '/imags/Projects/architectural/Signage/11.jpg',
    '/imags/Projects/architectural/Signage/12.jpg',
    '/imags/Projects/architectural/Signage/13.jpg',
    '/imags/Projects/architectural/Signage/14.jpg',
    '/imags/Projects/architectural/Signage/15.jpg',
    '/imags/Projects/architectural/Signage/16.jpg',
    '/imags/Projects/architectural/Signage/17.jpg',
    '/imags/Projects/architectural/Signage/18.jpg',
    '/imags/Projects/architectural/Signage/19.jpg',
    '/imags/Projects/architectural/Signage/20.jpg',
    '/imags/Projects/architectural/Signage/21.jpg',
    '/imags/Projects/architectural/Signage/22.jpg',
    '/imags/Projects/architectural/Signage/23.jpg',
    '/imags/Projects/architectural/Signage/24.jpg',
    '/imags/Projects/architectural/Signage/25.jpg',
    '/imags/Projects/architectural/Signage/26.jpg',
    '/imags/Projects/architectural/Signage/27.jpg',
  ],
  description: 'تصميم معماري متكامل لمول تجاري حديث، يجمع بين المساحات المفتوحة والمحلات التجارية بطريقة منظمة وجذابة.',
  descriptionEn: 'Comprehensive architectural design for a modern shopping mall, combining open spaces and retail stores in an organized and attractive manner.',
  details: 'يشمل المشروع تصميم واجهات المول، توزيع المحلات، المساحات العامة، المرافق والخدمات مع مراعاة تجربة الزائر وسهولة الحركة داخل المول.',
  detailsEn: 'The project includes the mall facades, store layout, public areas, facilities, and services, ensuring a smooth visitor experience and easy navigation within the mall.',
  client: '',
},{
  id: '23',
  title: 'MOSQUE',
  titleEn: 'MOSQUE',
  category: 'architectural',
  categoryAr: 'التصميم المعماري',
  categoryEn: 'Architectural Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/architectural/mosque/1.jpg',
  images: [
    '/imags/Projects/architectural/mosque/1.jpg',
    '/imags/Projects/architectural/mosque/2.jpg',
    '/imags/Projects/architectural/mosque/3.jpg',
    '/imags/Projects/architectural/mosque/4.jpg',
    '/imags/Projects/architectural/mosque/5.jpg',
    '/imags/Projects/architectural/mosque/6.jpg',
    '/imags/Projects/architectural/mosque/7.jpg',
    '/imags/Projects/architectural/mosque/8.jpg',
    '/imags/Projects/architectural/mosque/9.jpg',
  ],
  description: 'تصميم معماري لمسجد حديث يجمع بين الطابع الإسلامي التقليدي واللمسات المعاصرة مع الاهتمام بالمساحات الداخلية والخارجية.',
  descriptionEn: 'Architectural design for a modern mosque that combines traditional Islamic elements with contemporary touches, focusing on both interior and exterior spaces.',
  details: 'يشمل المشروع تصميم قاعات الصلاة، المآذن، الساحات الخارجية، مرافق الوضوء والخدمات مع مراعاة راحة المصلين وسهولة الحركة داخل المسجد.',
  detailsEn: 'The project includes the design of prayer halls, minarets, outdoor courtyards, ablution facilities, and services, ensuring comfort and smooth circulation for worshippers.',
  client: 'MOSQUE',
},
{
  id: '20',
  title: 'الهاون',
  titleEn: 'ALHAWAN',
  category: 'architectural',
  categoryAr: 'التصميم المعماري',
  categoryEn: 'Architectural Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/architectural/ALHAWN/1.jpg',
  images: [
    '/imags/Projects/architectural/ALHAWN/1.jpg',
    '/imags/Projects/architectural/ALHAWN/2.jpg',
    '/imags/Projects/architectural/ALHAWN/3.jpg',
    '/imags/Projects/architectural/ALHAWN/4.jpg',
    '/imags/Projects/architectural/ALHAWN/5.jpg',
    '/imags/Projects/architectural/ALHAWN/6.jpg',
  ],
  description: 'مشروع تصميم معماري لمبنى حديث يجمع بين الجمال الوظيفي والتصميم العصري مع مراعاة التوازن بين المساحات الداخلية والخارجية.',
  descriptionEn: 'Architectural design for a modern building that combines functional aesthetics with contemporary design, maintaining a balance between interior and exterior spaces.',
  details: 'يشمل المشروع تخطيط المساحات الداخلية، الواجهات، المرافق، والمساحات الخارجية، مع التركيز على توفير بيئة عملية وجمالية في الوقت نفسه.',
  detailsEn: 'The project includes interior layouts, facades, facilities, and outdoor spaces, focusing on creating a functional and aesthetically pleasing environment.',
  client: 'ALHAWAN',
},

 {
  id: '2',
  title: 'JYC',
  titleEn: 'JYC',
  category: 'landscape',
  categoryAr: 'تصميم الحدائق',
  categoryEn: 'Landscape Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/Landscape/JYC/1.jpg',
  images: [
    '/imags/Projects/Landscape/JYC/1.jpg',
    '/imags/Projects/Landscape/JYC/2.jpg',
    '/imags/Projects/Landscape/JYC/3.jpg',
    '/imags/Projects/Landscape/JYC/4.jpg',
    '/imags/Projects/Landscape/JYC/5.jpg',
    '/imags/Projects/Landscape/JYC/6.jpg',
    '/imags/Projects/Landscape/JYC/7.jpg',
    '/imags/Projects/Landscape/JYC/8.jpg',
    '/imags/Projects/Landscape/JYC/9.jpg',
    '/imags/Projects/Landscape/JYC/10.jpg',
  ],
  description: 'تصميم حدائق مبتكر يجمع بين الجمال الطبيعي والاستدامة لتوفير بيئة هادئة وجذابة',
  descriptionEn: 'Innovative landscape design combining natural beauty and sustainability to create a serene and attractive environment',
  details: 'يشمل المشروع مساحات خضراء، ممرات مشاة، مناطق جلوس، ونوافير لإضفاء تجربة ترفيهية وجمالية للزوار',
  detailsEn: 'The project includes green spaces, walking paths, seating areas, and fountains to provide a recreational and aesthetic experience for visitors',
  client: 'JYC'
},

{
  id: '3',
  title: 'المهيب',
  titleEn: 'Almuhaideb',
  category: 'landscape',
  categoryAr: 'تصميم الحدائق',
  categoryEn: 'Landscape Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/Landscape/Elmoheb/1.jpg',
  images: [
    '/imags/Projects/Landscape/Elmoheb/1.jpg',
    '/imags/Projects/Landscape/Elmoheb/2.jpg',
    '/imags/Projects/Landscape/Elmoheb/3.jpg',
    '/imags/Projects/Landscape/Elmoheb/4.jpg',
    '/imags/Projects/Landscape/Elmoheb/5.jpg',
    '/imags/Projects/Landscape/Elmoheb/6.jpg',
    '/imags/Projects/Landscape/Elmoheb/7.jpg',
  ],
  description: 'تصميم حدائق مبتكر يجمع بين الجمال الطبيعي، المسبح والجراج لتوفير بيئة متكاملة وجذابة',
  descriptionEn: 'Innovative landscape design combining natural beauty, a swimming pool, and a garage to create a complete and attractive environment',
  details: 'يشمل المشروع مساحات خضراء، ممرات، مناطق جلوس، مسبح، وجراج للسيارات لتجربة متكاملة تجمع بين الاسترخاء والوظائف العملية',
  detailsEn: 'The project features green spaces, pathways, seating areas, a swimming pool, and a garage, offering a complete experience combining relaxation and functionality',
  client: 'Almuhaideb',
},

{
  id: '4',
  title: 'البابطين',
  titleEn: 'Al Babtain',
  category: 'landscape',
  categoryAr: 'تصميم الحدائق',
  categoryEn: 'Landscape Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/Landscape/Elbabaten/1.jpg',
  images: [
    '/imags/Projects/Landscape/Elbabaten/1.jpg',
    '/imags/Projects/Landscape/Elbabaten/2.jpg',
    '/imags/Projects/Landscape/Elbabaten/3.jpg',
    '/imags/Projects/Landscape/Elbabaten/4.jpg',
    '/imags/Projects/Landscape/Elbabaten/5.jpg',
  ],
  description: 'حديقة خضراء مستدامة بتصميم عصري يوازن بين الجمال الطبيعي والوظائف العملية',
  descriptionEn: 'Sustainable green garden with a modern design balancing natural beauty and functionality',
  details: 'يشمل المشروع مساحات خضراء واسعة، ممرات، مناطق جلوس، ونوافير لتجربة استرخاء وجمال طبيعي متكاملة',
  detailsEn: 'The project features extensive green spaces, pathways, seating areas, and fountains for a complete natural and relaxing experience',
  client: 'Al Babtain'
},

{
  id: '5',
  title: 'فيلا خاصه',
  titleEn: 'Private villa',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/InteriorDesign/VillaSaeed/1.jpg',
  images: [
    '/imags/Projects/InteriorDesign/VillaSaeed/1.jpg',
    '/imags/Projects/InteriorDesign/VillaSaeed/7.jpg',
    '/imags/Projects/InteriorDesign/VillaSaeed/3.jpg',
    '/imags/Projects/InteriorDesign/VillaSaeed/4.jpg',
    '/imags/Projects/InteriorDesign/VillaSaeed/5.jpg',
    '/imags/Projects/InteriorDesign/VillaSaeed/6.jpg',
    '/imags/Projects/InteriorDesign/VillaSaeed/7.jpg',
    '/imags/Projects/InteriorDesign/VillaSaeed/8.jpg',
  ],
  description: 'تصميم داخلي عصري وفاخر يجمع بين الراحة والأناقة في كل زاوية من الفيلا',
  descriptionEn: 'Modern and luxurious interior design combining comfort and elegance in every corner of the villa',
  details: 'تتميز الفيلا بمساحات واسعة، غرف معيشة أنيقة، مطبخ مجهز، وغرف نوم فاخرة مع إضاءة وتصميم دقيق',
  detailsEn: 'The villa features spacious areas, elegant living rooms, a fully equipped kitchen, and luxurious bedrooms with precise lighting and design',
  client: 'Private villa'
},

{
  id: '6',
  title: 'فيلا خاصه',
  titleEn: 'Private villa',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/InteriorDesign/VillaDR.Kamel/3.jpg',
  images: [
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/1.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/2.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/3.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/4.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/5.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/6.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/7.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/8.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/9.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/10.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/11.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/12.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/13.jpg',
    '/imags/Projects/InteriorDesign/VillaDR.Kamel/14.jpg',
  ],
  description: 'تصميم داخلي عصري وفاخر يجمع بين الأناقة والوظائف العملية لكل مساحة في الفيلا',
  descriptionEn: 'Modern and luxurious interior design combining elegance and functional spaces throughout the villa',
  details: 'تتميز الفيلا بمساحات واسعة، غرف معيشة فخمة، مطبخ مجهز بالكامل، وغرف نوم أنيقة مع إضاءة مدروسة وتصميم دقيق',
  detailsEn: 'The villa features spacious areas, luxurious living rooms, a fully equipped kitchen, and elegant bedrooms with carefully planned lighting and design',
  client: 'Private villa'
},

{
  id: '7',
  title: 'غرفة فندقية',
  titleEn: 'Hotel Room',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/InteriorDesign/Hotel/1.jpg',
  images: [
    '/imags/Projects/InteriorDesign/Hotel/1.jpg',
    '/imags/Projects/InteriorDesign/Hotel/2.jpg',
    '/imags/Projects/InteriorDesign/Hotel/3.jpg',
    '/imags/Projects/InteriorDesign/Hotel/4.jpg',
    '/imags/Projects/InteriorDesign/Hotel/7.jpg',
    '/imags/Projects/InteriorDesign/Hotel/6.jpg',
    '/imags/Projects/InteriorDesign/Hotel/8.jpg',
    '/imags/Projects/InteriorDesign/Hotel/9.jpg',
  ],
  description: 'تصميم داخلي عصري لغرفة فندقية يجمع بين الراحة والأناقة في مساحة محدودة',
  descriptionEn: 'Modern interior design for a hotel room, combining comfort and elegance within a compact space',
  details: 'الغرفة تشمل سرير فاخر، منطقة جلوس، إضاءة مدروسة، وحلول تخزين عملية لتجربة إقامة مريحة',
  detailsEn: 'The room features a luxurious bed, seating area, well-planned lighting, and practical storage solutions for a comfortable stay',
  client: 'Hotel Room'
},

{
  id: '8',
  title: 'عمائر ثروه',
  titleEn: 'Tharwah Towers',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/InteriorDesign/TharwahTowers/1.jpg',
  images: [
    '/imags/Projects/InteriorDesign/TharwahTowers/1.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/2.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/3.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/4.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/5.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/6.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/7.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/8.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/9.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/10.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/11.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/12.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/13.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/14.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/15.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/16.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/17.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/18.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/19.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/20.jpg',
    '/imags/Projects/InteriorDesign/TharwahTowers/21.jpg',
  ],
  description: 'تصميم داخلي عصري لشقق سكنية في عمائر متعددة الطوابق يجمع بين الأناقة والوظائف العملية',
  descriptionEn: 'Modern interior design for residential apartments in multi-story buildings, combining elegance with functional spaces',
  details: 'يشمل المشروع تصميم غرف المعيشة، المطابخ، غرف النوم، وحلول التخزين بطريقة عملية وفاخرة لتوفير تجربة سكنية مريحة',
  detailsEn: 'The project includes the design of living rooms, kitchens, bedrooms, and storage solutions in a practical and luxurious way to offer a comfortable living experience',
  client: 'Tharwah Towers'
},
{
  id: '9',
  title: 'شقه',
  titleEn: 'Flat',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/InteriorDesign/Flat/1.jpg',
  images: [
    '/imags/Projects/InteriorDesign/Flat/1.jpg',
    '/imags/Projects/InteriorDesign/Flat/2.jpg',
    '/imags/Projects/InteriorDesign/Flat/3.jpg',
    '/imags/Projects/InteriorDesign/Flat/4.jpg',
    '/imags/Projects/InteriorDesign/Flat/5.jpg',
    '/imags/Projects/InteriorDesign/Flat/6.jpg',
    '/imags/Projects/InteriorDesign/Flat/7.jpg',
    '/imags/Projects/InteriorDesign/Flat/8.jpg',
    '/imags/Projects/InteriorDesign/Flat/9.jpg',
    '/imags/Projects/InteriorDesign/Flat/10.jpg',
    '/imags/Projects/InteriorDesign/Flat/11.jpg',
    '/imags/Projects/InteriorDesign/Flat/12.jpg',
    '/imags/Projects/InteriorDesign/Flat/14.jpg',
    '/imags/Projects/InteriorDesign/Flat/13.jpg',
  ],
  
  description: 'تصميم داخلي حديث لشقة سكنية يجمع بين البساطة والفخامة مع توزيع عملي للمساحات يمنح إحساساً بالراحة والاتساع.',
  descriptionEn: 'Modern interior design for a residential flat, combining simplicity and elegance with a practical space layout that enhances comfort and openness.',

  details: 'يشمل المشروع تصميم غرفة المعيشة، غرفة الطعام، المطبخ، غرف النوم، والحمامات، مع توظيف إضاءة مدروسة ومواد عالية الجودة لخلق بيئة سكنية مريحة ومتناسقة.',
  detailsEn: 'The project includes the design of the living room, dining area, kitchen, bedrooms, and bathrooms, featuring well-planned lighting and high-quality materials to create a comfortable and harmonious living environment.',

  client: 'Tharwah Towers'
},
{
  id: '10',
  title: 'شقة المطلقية',
  titleEn: 'Al-Mutallaqeya Flat',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',
  image: '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/1.jpg',
  images: [
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/1.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/2.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/3.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/4.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/5.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/6.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/8.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/9.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/10.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/11.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/12.jpg',
    '/imags/Projects/InteriorDesign/Al-MutallaqeyaFlat/7.jpg',
  ],

  description: 'تصميم داخلي متكامل لشقة سكنية في حي المطلقية بمدينة الرياض، يجمع بين البساطة العصرية واللمسات الفاخرة. تم التركيز على خلق بيئة مريحة ومتناسقة في جميع الفراغات مع استخدام ألوان هادئة وخامات عالية الجودة تعكس هوية المكان وراحة المستخدم.',
  descriptionEn: 'A fully integrated interior design for a residential apartment located in Al-Mutallaqeya, Riyadh. The concept combines modern simplicity with elegant touches, creating a calm and harmonious atmosphere across all spaces. High-quality materials and a soft color palette were used to enhance comfort and reflect the identity of the home.',

  details: '• تصميم غرف المعيشة والنوم بأسلوب عصري هادئ\n• توزيع إنارة متوازن بين الإضاءة المخفية والمباشرة\n• اختيار أثاث عملي يحقق أعلى مستويات الراحة\n• استخدام خامات طبيعية مثل الخشب والرخام لإضافة دفء وفخامة\n• تنسيق الألوان لتوحيد الهوية البصرية للشقة\n• تحسين استغلال المساحات لتحقيق أكبر قدر من الاتساع',
  detailsEn: '• Modern and calm design for living and bedroom spaces\n• Balanced lighting plan combining ambient and direct lighting\n• Functional furniture selections for maximum comfort\n• Use of natural materials such as wood and marble for warmth and elegance\n• Harmonized color palette to create a unified visual identity\n• Optimized space utilization to achieve a spacious feel',

  client: 'Al-Mutallaqeya Flat'
},



{
  id: '11',
  title: 'دورة مياه',
  titleEn: 'Bathroom',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: 'الرياض',
  cityEn: '',
  year: '',

  image: '/imags/Projects/InteriorDesign/Bathroom/1.jpg',

  images: [
    '/imags/Projects/InteriorDesign/Bathroom/1.jpg',
    '/imags/Projects/InteriorDesign/Bathroom/2.jpg',
    '/imags/Projects/InteriorDesign/Bathroom/3.jpg',
    '/imags/Projects/InteriorDesign/Bathroom/4.jpg',
    '/imags/Projects/InteriorDesign/Bathroom/5.jpg',
    '/imags/Projects/InteriorDesign/Bathroom/7.jpg',
    '/imags/Projects/InteriorDesign/Bathroom/8.jpg',
    '/imags/Projects/InteriorDesign/Bathroom/9.jpg',
  ],

  description:
    'تصميم دورة مياه عصرية تتميز بالجمع بين العملية والفخامة. تم اختيار خامات عالية الجودة مثل الرخام والستيل الأسود لإضافة طابع راقٍ ومتناسق، مع توزيع إضاءة مدروس يعزز التفاصيل ويخلق إحساسًا بالاتساع والراحة.',
  
  descriptionEn:
    'A modern bathroom design that blends functionality with elegance. High-quality materials such as marble and black steel were selected to create a refined and cohesive atmosphere. The lighting layout highlights the details and enhances the sense of space and comfort.',

  details:
    '• استخدام خامات فاخرة مثل الرخام الطبيعي\n• توزيع إنارة مخفية ومدروسة لإبراز التفاصيل\n• اختيار تشطيبات باللون الأسود لإضافة لمسة عصرية فاخرة\n• تصميم مغسلة ومساحات تخزين عملية\n• تنسيق الألوان لتحقيق انسجام بصري\n• استغلال المساحات الصغيرة لزيادة الشعور بالاتساع',

  detailsEn:
    '• Natural marble and premium materials\n• Ambient and hidden lighting to highlight design details\n• Modern black finishes for a luxurious touch\n• Functional sink and storage solutions\n• Harmonized color palette for visual balance\n• Smart space utilization to maximize openness',

  client: 'Bathroom'
},

{
  id: '12',
  title: 'شقه دانا ',
  titleEn: 'Dana Apartment',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',

  image: '/imags/Projects/InteriorDesign/Dana/1.jpg',

  images: [
    '/imags/Projects/InteriorDesign/Dana/1.jpg',
    '/imags/Projects/InteriorDesign/Dana/2.jpg',
    '/imags/Projects/InteriorDesign/Dana/3.jpg',
    '/imags/Projects/InteriorDesign/Dana/4.jpg',
    '/imags/Projects/InteriorDesign/Dana/5.jpg',
    '/imags/Projects/InteriorDesign/Dana/6.jpg',
    '/imags/Projects/InteriorDesign/Dana/7.jpg',
  ],

  description: 'شقة دانا تتميز بتصميم داخلي عصري يجمع بين البساطة والفخامة. تم التركيز على توزيع الإضاءة الطبيعية واستغلال المساحات لتحقيق أعلى درجات الراحة والانسجام في كل زاوية داخل الشقة.',
  descriptionEn: 'Dana Apartment features a modern interior design that blends simplicity with elegance. The layout maximizes natural lighting and optimizes the use of space to create a comfortable and harmonious living environment.',

  details: '• تصميم عصري بألوان هادئة\n• توزيع مثالي للإضاءة الطبيعية\n• دمج بين الخشب والرخام لإضافة فخامة\n• أثاث عملي يناسب المساحات\n• تشطيب عالي الجودة',
  detailsEn: '• Modern design with soft, neutral tones\n• Optimal natural lighting distribution\n• Combination of wood and marble for a luxurious touch\n• Functional furniture tailored to the space\n• High-quality finishing materials',

  client: 'Dana Apartment'
},

// {
//   id: '13',
//   title: 'سلَشي راي',
//   titleEn: 'Slushy Ry',
//   category: 'interior',
//   categoryAr: 'التصميم الداخلي',
//   categoryEn: 'Interior Design',
//   city: 'الرياض',
//   cityEn: 'Riyadh',
//   year: '2023',

//   image: 'imags/Projects/InteriorDesign/slushyry/2.jpeg',

//   images: [
//     'imags/Projects/InteriorDesign/slushyry/1.jpeg',
//     'imags/Projects/InteriorDesign/slushyry/2.jpeg',
//     'imags/Projects/InteriorDesign/slushyry/3.jpeg',
//     'imags/Projects/InteriorDesign/slushyry/4.jpeg',
//   ],

//   description: 'تصميم داخلي عصري لكافيه يجمع بين الراحة والأناقة. تم استخدام ألوان دافئة وإضاءة مدروسة لإبراز التفاصيل وخلق أجواء مريحة للزبائن، مع توزيع المساحات بطريقة عملية لاستقبال عدد مناسب من الضيوف.',
//   descriptionEn: 'Modern interior design for a café that blends comfort and elegance. Warm colors and carefully planned lighting highlight the details and create a cozy atmosphere, while the layout optimizes space to accommodate guests efficiently.',

//   details: '• تصميم عصري مع لمسات دافئة\n• توزيع إنارة مدروسة لإبراز الجو العام\n• أثاث عملي ومريح للزبائن\n• دمج خامات طبيعية مثل الخشب والرخام\n• استغلال المساحة بشكل فعال لاستيعاب الضيوف',
//   detailsEn: '• Modern design with warm touches\n• Strategically placed lighting to enhance the atmosphere\n• Comfortable and functional furniture for guests\n• Use of natural materials like wood and marble\n• Efficient space utilization to accommodate visitors',

//   client: 'Slushy Ry'
// },
{
  id: '14',
  title: 'Lungo',
  titleEn: 'Lungo',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',

  image: '/imags/Projects/InteriorDesign/Lungo/1.jpg',

  images: [
    '/imags/Projects/InteriorDesign/Lungo/1.jpg',
    '/imags/Projects/InteriorDesign/Lungo/2.jpg',
    '/imags/Projects/InteriorDesign/Lungo/3.jpg',
    '/imags/Projects/InteriorDesign/Lungo/4.jpg',
    '/imags/Projects/InteriorDesign/Lungo/5.jpg',
    '/imags/Projects/InteriorDesign/Lungo/6.jpg',
    '/imags/Projects/InteriorDesign/Lungo/7.jpg',
    '/imags/Projects/InteriorDesign/Lungo/8.jpg',
    '/imags/Projects/InteriorDesign/Lungo/9.jpg',
    '/imags/Projects/InteriorDesign/Lungo/10.jpg',
  ],

  description: 'تصميم داخلي عصري لكافيه "Lungo" يركز على خلق أجواء مريحة وعصرية للزبائن. تم اختيار ألوان دافئة وإضاءة موجهة لتسليط الضوء على التفاصيل، مع توزيع المساحات بشكل عملي لاستيعاب الزبائن مع الحفاظ على خصوصية كل منطقة.',
  descriptionEn: 'Modern interior design for "Lungo" café, focusing on creating a comfortable and contemporary atmosphere. Warm colors and targeted lighting highlight design details, while the layout efficiently accommodates guests and maintains privacy in each area.',

  details: '• تصميم عصري مع لمسات دافئة\n• توزيع إنارة مخصص لإبراز التفاصيل والجو العام\n• أثاث عملي ومريح للزبائن\n• دمج خامات طبيعية مثل الخشب والحجر\n• استغلال المساحة بشكل مثالي لاستيعاب الزبائن',
  detailsEn: '• Contemporary design with warm touches\n• Custom lighting layout to enhance ambiance and details\n• Comfortable and functional furniture for guests\n• Use of natural materials like wood and stone\n• Optimal space utilization to accommodate visitors',

  client: 'Lungo'
},

{
  id: '15',
  title: 'جيم',
  titleEn: 'GYM',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',

  image: '/imags/Projects/InteriorDesign/GYM/1.jpg',

  images: [
    '/imags/Projects/InteriorDesign/GYM/1.jpg',
    '/imags/Projects/InteriorDesign/GYM/2.jpg',
    '/imags/Projects/InteriorDesign/GYM/3.jpg',
    '/imags/Projects/InteriorDesign/GYM/4.jpg',
    '/imags/Projects/InteriorDesign/GYM/5.jpg',
    '/imags/Projects/InteriorDesign/GYM/6.jpg',
  ],

  description: 'تصميم داخلي عصري ومتعدد الوظائف لصالة رياضية متكاملة في الرياض، مع التركيز على الإضاءة والتهوية والمساحات المفتوحة.',
  descriptionEn: 'Modern and functional interior design for a fully equipped gym in Riyadh, emphasizing lighting, ventilation, and open spaces.',

  details: 'تم تصميم الجيم ليشمل مناطق تدريب متنوعة، أجهزة حديثة، منطقة للكارديو، ومساحات مفتوحة لتمارين جماعية، مع اختيار ألوان ومسطحات تعكس الطاقة والحيوية.',
  detailsEn: 'The gym is designed to include diverse training zones, modern equipment, a cardio area, and open spaces for group exercises, with a color palette and surfaces that reflect energy and vitality.',

  client: 'GYM'
},

{
  id: '16',
  title: 'EAL',
  titleEn: 'EAL',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',

  image: '/imags/Projects/InteriorDesign/EAL/1.jpg',

  images: [
    '/imags/Projects/InteriorDesign/EAL/1.jpg',
    '/imags/Projects/InteriorDesign/EAL/2.jpg',
    '/imags/Projects/InteriorDesign/EAL/3.jpg',
    '/imags/Projects/InteriorDesign/EAL/4.jpg',
    '/imags/Projects/InteriorDesign/EAL/5.jpg',
    '/imags/Projects/InteriorDesign/EAL/6.jpg',
    '/imags/Projects/InteriorDesign/EAL/7.jpg',
    '/imags/Projects/InteriorDesign/EAL/8.jpg',
  ],

  description: 'تصميم داخلي عصري لكافيه يركز على الأجواء المريحة والإضاءة الدافئة والمساحات المفتوحة لتجربة مميزة للزوار.',
  descriptionEn: 'Modern interior design for a café, focusing on cozy ambiance, warm lighting, and open spaces to create a unique experience for visitors.',

  details: 'تم تصميم الكافيه ليشمل مناطق جلوس متنوعة، ركن للقهوة والمشروبات، ومساحات تفاعلية للزوار، مع استخدام ألوان ومواد تعكس الأناقة والراحة.',
  detailsEn: 'The café features various seating areas, a coffee and beverage corner, and interactive spaces for visitors, using colors and materials that reflect elegance and comfort.',

  client: 'EAL'
},
{
  id: '22',
  title: 'CAVO',
  titleEn: 'CAVO',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',

  image: '/imags/Projects/InteriorDesign/CAVO/1.jpg',

  images: [
    '/imags/Projects/InteriorDesign/CAVO/1.jpg',
    '/imags/Projects/InteriorDesign/CAVO/2.jpg',
    '/imags/Projects/InteriorDesign/CAVO/3.jpg',
    '/imags/Projects/InteriorDesign/CAVO/4.jpg',
    '/imags/Projects/InteriorDesign/CAVO/5.jpg',
    '/imags/Projects/InteriorDesign/CAVO/6.jpg',
    '/imags/Projects/InteriorDesign/CAVO/7.jpg',
    '/imags/Projects/InteriorDesign/CAVO/8.jpg',
    '/imags/Projects/InteriorDesign/CAVO/9.jpg',
    '/imags/Projects/InteriorDesign/CAVO/10.jpg',
    '/imags/Projects/InteriorDesign/CAVO/11.jpg',
    '/imags/Projects/InteriorDesign/CAVO/12.jpg',
    '/imags/Projects/InteriorDesign/CAVO/13.jpg',
    '/imags/Projects/InteriorDesign/CAVO/14.jpg',
  ],

  description: 'كافيه بتصميم عصري مكون من دورين، يوفر أجواء مريحة مع توزيع ذكي للمساحات والإضاءة لتعزيز تجربة الزوار.',
  descriptionEn: 'A modern two-story café designed to offer a cozy atmosphere, with smartly distributed spaces and lighting to enhance the visitor experience.',

  details: 'يحتوي الكافيه على مناطق جلوس متعددة في كلا الدورين، ركن للقهوة والمشروبات، مع تصميم داخلي يركز على الراحة والأناقة وخلق تجربة فريدة للزوار.',
  detailsEn: 'The café features multiple seating areas across both floors, a coffee and beverage corner, with interior design focusing on comfort and elegance to create a unique experience for visitors.',

  client: 'CAVO'
},

{
  id: '21',
  title: 'BK GCC',
  titleEn: 'BK GCC',
  category: 'interior',
  categoryAr: 'التصميم الداخلي',
  categoryEn: 'Interior Design',
  city: '',
  cityEn: '',
  year: '',

  image: '/imags/Projects/InteriorDesign/BKGCC/1.jpg',

  images: [
    '/imags/Projects/InteriorDesign/BKGCC/1.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/2.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/3.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/4.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/5.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/6.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/7.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/8.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/9.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/24.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/25.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/12.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/13.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/14.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/15.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/16.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/17.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/18.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/19.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/20.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/22.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/21.jpg',
    '/imags/Projects/InteriorDesign/BKGCC/23.jpg',
  ],

  description: 'تصميم داخلي حديث للشركة يشمل المكاتب والمساحات المشتركة بطريقة عملية وجذابة.',
  descriptionEn: 'Modern interior design for the company, covering offices and shared spaces in a practical and attractive way.',

  details: 'تم التركيز على خلق بيئة عمل مريحة مع توزيع ذكي للمكاتب ومساحات الاجتماعات، إضافةً إلى تصميم مناطق استقبال مميزة.',
  detailsEn: 'Focused on creating a comfortable work environment with smart office and meeting room layout, along with a distinctive reception area design.',

  client: 'BK GCC'
},




];