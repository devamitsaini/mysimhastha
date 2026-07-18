import GuideSEO from "../../components/guides/GuideSEO";
import GuideBreadcrumb from "../../components/guides/GuideBreadcrumb";
import GuideHero from "../../components/guides/GuideHero";
import GuideLanguageSwitcher from "../../components/guides/GuideLanguageSwitcher";
import GuideQuickAnswer from "../../components/guides/GuideQuickAnswer";
import GuideQuickFacts from "../../components/guides/GuideQuickFacts";
import GuideKeyTakeaways from "../../components/guides/GuideKeyTakeaways";
import GuideTableOfContents from "../../components/guides/GuideTableOfContents";
import GuideSection from "../../components/guides/GuideSection";
import GuideFAQ from "../../components/guides/GuideFAQ";
import GuideRelatedGuides from "../../components/guides/GuideRelatedGuides";
import GuideOfficialResources from "../../components/guides/GuideOfficialResources";
import ShareButtons from "../../components/guides/ShareButtons";
import GuideRenderer from "../../components/guides/GuideRenderer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "../styles/guides.css";

const guide = {
  language: "hi",

  slug: "kumbh-locations",

  title:
    "कुंभ मेला कहाँ लगता है? भारत के 4 प्रमुख कुंभ स्थलों की पूरी जानकारी | सिंहस्थ कहाँ लगता है?",

  author: "MySimhastha संपादकीय टीम",

  updated: "30 जून 2026",

  readingTime: "12 मिनट",

  hero: {
    title:
      "कुंभ मेला कहाँ लगता है? भारत के चार प्रमुख कुंभ स्थलों की सम्पूर्ण जानकारी",

    description:
      "जानें भारत में कुंभ मेला कहाँ-कहाँ आयोजित होता है, सिंहस्थ केवल उज्जैन में ही क्यों मनाया जाता है, और चारों पवित्र कुंभ स्थलों का धार्मिक एवं ऐतिहासिक महत्व।",

    image: "kumbh-locations.webp",

    imageAlt:
      "भारत के चार प्रमुख कुंभ मेला स्थलों का मानचित्र",

    caption:
      "भारत के चार पवित्र कुंभ मेला स्थल।"
  },

  seo: {
    title:
      "कुंभ मेला कहाँ लगता है? | सिंहस्थ कहाँ लगता है? सम्पूर्ण जानकारी",

    description:
      "भारत के चारों कुंभ मेला स्थलों—उज्जैन, प्रयागराज, हरिद्वार और नासिक—की पूरी जानकारी प्राप्त करें। जानें सिंहस्थ केवल उज्जैन में ही क्यों आयोजित होता है, इसका इतिहास, पौराणिक कथा, पवित्र नदियाँ, यात्रा सुझाव और अक्सर पूछे जाने वाले प्रश्न।",

    keywords:
      "कुंभ मेला कहाँ लगता है, सिंहस्थ कहाँ लगता है, कुंभ मेला स्थल, भारत में कुंभ मेला, उज्जैन सिंहस्थ, कुंभ मेला जानकारी"
  },

  quickAnswer:
    "कुंभ मेला भारत के चार पवित्र स्थानों—उज्जैन, प्रयागराज, हरिद्वार और नासिक—में आयोजित होता है। इनमें केवल उज्जैन का कुंभ 'सिंहस्थ' कहलाता है क्योंकि यह उस समय आयोजित होता है जब बृहस्पति सिंह राशि में प्रवेश करते हैं।",

  quickFacts: [
    {
      label: "कुल स्थल",
      value: "4"
    },

    {
      label: "सिंहस्थ",
      value: "उज्जैन"
    },

    {
      label: "पवित्र नदी",
      value: "शिप्रा"
    },

    {
      label: "अगला सिंहस्थ",
      value: "2028"
    },

    {
      label: "आवृत्ति",
      value: "हर 12 वर्ष"
    },

    {
      label: "देश",
      value: "भारत"
    }
  ],

  keyTakeaways: [
    "सिंहस्थ केवल उज्जैन में आयोजित होता है।",

    "भारत में चार आधिकारिक कुंभ मेला स्थल हैं।",

    "उज्जैन का कुंभ सिंहस्थ कहलाता है क्योंकि यह बृहस्पति के सिंह राशि में आने पर आयोजित होता है।",

    "प्रत्येक कुंभ स्थल किसी न किसी पवित्र नदी से जुड़ा हुआ है।",

    "हर कुंभ मेले में करोड़ों श्रद्धालु भाग लेते हैं।"
  ],

  tableOfContents: [
    {
      id: "what-is-kumbh",
      title: "कुंभ मेला क्या है?"
    },

    {
      id: "samudra-manthan",
      title: "कुंभ मेले की उत्पत्ति"
    },

    {
      id: "kumbh-locations",
      title: "कुंभ मेला कहाँ लगता है?"
    },

    {
      id: "four-locations",
      title: "चार प्रमुख कुंभ स्थल"
    },

    {
      id: "why-four-locations",
      title: "केवल चार स्थानों पर ही क्यों?"
    },

    {
      id: "why-simhastha",
      title: "केवल उज्जैन में सिंहस्थ क्यों?"
    },

    {
      id: "difference",
      title: "कुंभ और सिंहस्थ में अंतर"
    },

    {
      id: "unesco",
      title: "यूनेस्को मान्यता"
    },

    {
      id: "travel-tips",
      title: "यात्रा सुझाव"
    },

    {
      id: "faq",
      title: "अक्सर पूछे जाने वाले प्रश्न"
    }
  ],

 sections: [

{
  id: "what-is-kumbh",

  title: "कुंभ मेला क्या है?",

  content: [

    "कुंभ मेला विश्व का सबसे बड़ा शांतिपूर्ण धार्मिक आयोजन है, जहाँ करोड़ों श्रद्धालु, संत, महात्मा और साधु-संत पवित्र नदियों में स्नान करने के लिए एकत्रित होते हैं। यह उत्सव प्राचीन हिन्दू परंपराओं तथा ज्योतिषीय गणनाओं के आधार पर आयोजित किया जाता है।",

    "‘कुंभ’ शब्द का अर्थ है ‘घड़ा’ या ‘कलश’। हिन्दू पौराणिक कथाओं के अनुसार समुद्र मंथन के समय अमृत कलश को लेकर देवताओं और असुरों के बीच संघर्ष हुआ। इसी दौरान अमृत की बूंदें भारत के चार स्थानों पर गिरीं, जो आगे चलकर कुंभ मेला स्थलों के रूप में प्रसिद्ध हुए।",

    "आज कुंभ मेला अपनी आध्यात्मिक महत्ता, सांस्कृतिक विरासत और विशाल श्रद्धालु समुदाय के कारण विश्वभर में प्रसिद्ध है। इसे यूनेस्को द्वारा मानवता की अमूर्त सांस्कृतिक विरासत के रूप में भी मान्यता प्राप्त है।"

  ]

},

{
  id: "kumbh-locations",

  title: "कुंभ मेला कहाँ लगता है?",

  content: [

    "कुंभ मेला भारत के चार पवित्र स्थानों पर आयोजित होता है। प्रत्येक स्थान किसी पवित्र नदी तथा विशेष ग्रह-नक्षत्रों के संयोग से जुड़ा हुआ है।",

    "ये चार स्थान हैं—उज्जैन (मध्य प्रदेश), प्रयागराज (उत्तर प्रदेश), हरिद्वार (उत्तराखंड) और नासिक (महाराष्ट्र)।",

    "इन चारों में केवल उज्जैन का कुंभ 'सिंहस्थ' कहलाता है क्योंकि यह बृहस्पति के सिंह राशि में प्रवेश करने पर आयोजित होता है।"

  ]

},

{
  id: "four-locations",

  title: "भारत के चार प्रमुख कुंभ मेला स्थल",

  subtitle:
    "प्रत्येक स्थान का अपना धार्मिक, ऐतिहासिक और ज्योतिषीय महत्व है।",

  content: [

    "उज्जैन (मध्य प्रदेश) — यहाँ शिप्रा नदी के तट पर सिंहस्थ आयोजित होता है। यह भगवान महाकालेश्वर ज्योतिर्लिंग का पवित्र नगर है और हिन्दू धर्म के सबसे महत्वपूर्ण तीर्थों में से एक माना जाता है।",

    "प्रयागराज (उत्तर प्रदेश) — यहाँ गंगा, यमुना और अदृश्य सरस्वती के त्रिवेणी संगम पर कुंभ मेला आयोजित होता है। यह हिन्दू धर्म के सबसे पवित्र संगमों में गिना जाता है।",

    "हरिद्वार (उत्तराखंड) — यहाँ गंगा नदी के तट पर विशेष रूप से हर की पौड़ी में श्रद्धालु पवित्र स्नान करते हैं।",

    "नासिक (महाराष्ट्र) — यहाँ गोदावरी नदी के तट पर, विशेष रूप से रामकुंड क्षेत्र में कुंभ मेला आयोजित होता है।"

  ]

},

{
  id: "simhastha",

  title: "उज्जैन का कुंभ सिंहस्थ क्यों कहलाता है?",

  content: [

    "‘सिंहस्थ’ शब्द ‘सिंह’ अर्थात सिंह राशि से बना है।",

    "उज्जैन का कुंभ तब आयोजित होता है जब बृहस्पति (गुरु) सिंह राशि में प्रवेश करते हैं।",

    "यह विशेष ज्योतिषीय संयोग अन्य तीन कुंभ स्थलों पर नहीं बनता, इसलिए केवल उज्जैन का कुंभ ‘सिंहस्थ’ कहलाता है।",

    "शिप्रा नदी, महाकालेश्वर ज्योतिर्लिंग और इस दिव्य ग्रह-योग के कारण सिंहस्थ हिन्दू धर्म के सबसे महत्वपूर्ण धार्मिक आयोजनों में से एक माना जाता है।"

  ]

},

{
  id: "difference",

  title: "कुंभ मेला और सिंहस्थ में क्या अंतर है?",

  subtitle:
    "अक्सर लोग इन दोनों शब्दों को एक ही मान लेते हैं, जबकि दोनों में अंतर है।",

  content: [

    "कुंभ मेला भारत के चार पवित्र स्थानों पर आयोजित होने वाला धार्मिक पर्व है।",

    "सिंहस्थ विशेष रूप से उज्जैन में आयोजित होने वाले कुंभ मेले का नाम है।",

    "अर्थात प्रत्येक सिंहस्थ एक कुंभ मेला है, लेकिन प्रत्येक कुंभ मेला सिंहस्थ नहीं होता।"

  ]

},

{
  id: "samudra-manthan",

  title: "समुद्र मंथन और कुंभ मेले की कथा",

  content: [

    "हिन्दू पौराणिक कथाओं के अनुसार कुंभ मेले की शुरुआत समुद्र मंथन से जुड़ी हुई है। देवताओं और असुरों ने अमृत प्राप्त करने के लिए समुद्र मंथन किया।",

    "जब भगवान धन्वंतरि अमृत कलश लेकर प्रकट हुए, तब देवताओं और असुरों के बीच संघर्ष शुरू हो गया। इसी संघर्ष के दौरान अमृत की चार बूंदें प्रयागराज, हरिद्वार, उज्जैन और नासिक में गिरीं।",

    "इन्हीं चार स्थानों पर आज कुंभ मेला आयोजित किया जाता है।"

  ]

},

{
  id: "why-four-locations",

  title: "कुंभ मेला केवल चार स्थानों पर ही क्यों लगता है?",

  content: [

    "हिन्दू मान्यताओं के अनुसार अमृत की बूंदें केवल चार स्थानों पर गिरी थीं, इसलिए कुंभ मेला भी केवल इन्हीं चार स्थानों पर आयोजित किया जाता है।",

    "प्रत्येक स्थान विशेष ग्रह-नक्षत्रों के संयोग से जुड़ा हुआ है, जो कुंभ मेले के आयोजन का समय निर्धारित करते हैं।"

  ]

},

{
  id: "why-simhastha",

  title: "केवल उज्जैन का कुंभ सिंहस्थ क्यों कहलाता है?",

  content: [

    "सिंहस्थ शब्द सिंह राशि से जुड़ा हुआ है।",

    "जब बृहस्पति सिंह राशि में प्रवेश करते हैं तब उज्जैन में कुंभ मेला आयोजित होता है।",

    "इसी कारण केवल उज्जैन का कुंभ 'सिंहस्थ' कहलाता है।"

  ]

},

{
  id: "unesco",

  title: "यूनेस्को द्वारा मान्यता",

  content: [

    "कुंभ मेले को यूनेस्को ने मानवता की अमूर्त सांस्कृतिक विरासत (Intangible Cultural Heritage) की सूची में शामिल किया है।",

    "यह भारत की प्राचीन धार्मिक परंपराओं, सांस्कृतिक विरासत और सामुदायिक सहभागिता का उत्कृष्ट उदाहरण माना जाता है।"

  ]

},

{
  id: "timeline",

  title: "कुंभ मेले का चक्र",

  content: [

    "हरिद्वार में गंगा नदी के तट पर कुंभ मेला आयोजित होता है।",

    "प्रयागराज में त्रिवेणी संगम पर कुंभ मेला आयोजित होता है।",

    "नासिक में गोदावरी नदी के तट पर कुंभ आयोजित होता है।",

    "उज्जैन में शिप्रा नदी के तट पर सिंहस्थ आयोजित होता है।"

  ]

},

{
  id: "holy-rivers",

  title: "चारों पवित्र नदियों का महत्व",

  content: [

    "प्रत्येक कुंभ स्थल एक पवित्र नदी से जुड़ा हुआ है, जहाँ स्नान को अत्यंत पुण्यदायी माना जाता है।",

    "शिप्रा, गंगा, त्रिवेणी संगम तथा गोदावरी हिन्दू धर्म की सबसे पवित्र नदियों में गिनी जाती हैं।"

  ]

},

{
  id: "millions",

  title: "कुंभ मेले में करोड़ों श्रद्धालु क्यों आते हैं?",

  content: [

    "मान्यता है कि कुंभ मेले के दौरान पवित्र स्नान करने से पापों का नाश होता है तथा आध्यात्मिक उन्नति प्राप्त होती है।",

    "श्रद्धालु इस अवसर पर संतों के प्रवचन सुनते हैं, मंदिरों के दर्शन करते हैं और भारतीय आध्यात्मिक परंपराओं का अनुभव करते हैं।"

  ]

},

{
  id: "first-time",

  title: "पहली बार कुंभ मेले में जाने वालों के लिए सुझाव",

  content: [

    "होटल पहले से बुक करें।",

    "अपने साथ वैध पहचान पत्र रखें।",

    "आधिकारिक कार्यक्रम और स्नान तिथियों का पालन करें।",

    "अधिकृत परिवहन सेवाओं का उपयोग करें।",

    "पर्याप्त पानी पिएँ और आरामदायक कपड़े पहनें।"

  ]

},

{
  id: "myths",

  title: "कुंभ मेले से जुड़े सामान्य मिथक और तथ्य",

  content: [

    "मिथक: सिंहस्थ चारों शहरों में आयोजित होता है।",

    "तथ्य: सिंहस्थ केवल उज्जैन में आयोजित होता है।",

    "मिथक: हर कुंभ मेले को सिंहस्थ कहा जाता है।",

    "तथ्य: केवल उज्जैन के कुंभ मेले को सिंहस्थ कहा जाता है।"

  ]

}

],
 faq: [

{
  question: "सिंहस्थ कहाँ आयोजित होता है?",
  answer:
    "सिंहस्थ केवल मध्य प्रदेश के उज्जैन शहर में पवित्र शिप्रा नदी के तट पर आयोजित होता है।"
},

{
  question: "भारत में कितने कुंभ मेला स्थल हैं?",
  answer:
    "भारत में चार आधिकारिक कुंभ मेला स्थल हैं—उज्जैन, प्रयागराज, हरिद्वार और नासिक।"
},

{
  question: "कुंभ मेला किन चार स्थानों पर लगता है?",
  answer:
    "कुंभ मेला उज्जैन (मध्य प्रदेश), प्रयागराज (उत्तर प्रदेश), हरिद्वार (उत्तराखंड) और नासिक (महाराष्ट्र) में आयोजित होता है। प्रत्येक स्थान एक पवित्र नदी और विशेष ज्योतिषीय संयोग से जुड़ा है।"
},

{
  question: "उज्जैन के कुंभ को सिंहस्थ क्यों कहा जाता है?",
  answer:
    "उज्जैन का कुंभ सिंहस्थ इसलिए कहलाता है क्योंकि यह उस समय आयोजित होता है जब बृहस्पति सिंह राशि में प्रवेश करते हैं।"
},

{
  question: "क्या सिंहस्थ चारों शहरों में आयोजित होता है?",
  answer:
    "नहीं। सिंहस्थ केवल उज्जैन में आयोजित होता है। अन्य तीन शहरों में इसे केवल कुंभ मेला कहा जाता है।"
},

{
  question: "कुंभ मेला और सिंहस्थ में क्या अंतर है?",
  answer:
    "कुंभ मेला भारत के चार पवित्र स्थलों पर आयोजित होने वाला धार्मिक पर्व है, जबकि सिंहस्थ विशेष रूप से उज्जैन में आयोजित होने वाले कुंभ मेले का नाम है।"
},

{
  question: "अगला सिंहस्थ कब होगा?",
  answer:
    "अगला सिंहस्थ वर्ष 2028 में उज्जैन में आयोजित होने वाला है।"
},

{
  question: "सिंहस्थ किस नदी के किनारे आयोजित होता है?",
  answer:
    "सिंहस्थ उज्जैन की पवित्र शिप्रा नदी के तट पर आयोजित होता है।"
},

{
  question: "कुंभ मेला केवल चार स्थानों पर ही क्यों लगता है?",
  answer:
    "हिन्दू मान्यताओं के अनुसार समुद्र मंथन के दौरान अमृत की बूंदें केवल चार स्थानों—प्रयागराज, हरिद्वार, नासिक और उज्जैन—पर गिरी थीं। इसलिए कुंभ मेला भी केवल इन्हीं स्थानों पर आयोजित होता है।"
},

{
  question: "सबसे बड़ा कुंभ मेला कौन सा है?",
  answer:
    "प्रयागराज का महाकुंभ विश्व के सबसे बड़े धार्मिक आयोजनों में से एक माना जाता है और इसमें करोड़ों श्रद्धालु भाग लेते हैं।"
},

{
  question: "कुंभ मेला कितने वर्षों में एक बार आयोजित होता है?",
  answer:
    "प्रत्येक कुंभ स्थल पर लगभग हर 12 वर्ष में एक बार कुंभ मेला आयोजित होता है।"
},

{
  question: "क्या कोई भी व्यक्ति कुंभ मेले में जा सकता है?",
  answer:
    "हाँ। कुंभ मेला सभी लोगों के लिए खुला होता है। श्रद्धालुओं और पर्यटकों को स्थानीय नियमों एवं परंपराओं का पालन करना चाहिए।"
},

{
  question: "क्या कुंभ मेले में प्रवेश शुल्क होता है?",
  answer:
    "नहीं। कुंभ मेले में प्रवेश निःशुल्क होता है। हालांकि होटल, परिवहन तथा अन्य सेवाओं के लिए शुल्क देना पड़ सकता है।"
},

{
  question: "शाही स्नान क्या होता है?",
  answer:
    "शाही स्नान कुंभ मेले का सबसे महत्वपूर्ण धार्मिक अनुष्ठान है, जिसमें अखाड़ों के साधु-संत और नागा साधु भव्य शोभायात्रा के साथ सबसे पहले पवित्र स्नान करते हैं।"
},

{
  question: "नागा साधु कौन होते हैं?",
  answer:
    "नागा साधु हिन्दू सन्यासी होते हैं जो कठोर तपस्या, वैराग्य और आध्यात्मिक जीवन के लिए प्रसिद्ध हैं। वे कुंभ मेले का प्रमुख आकर्षण होते हैं।"
},

{
  question: "कुंभ मेले में जाने का सबसे अच्छा समय कौन सा है?",
  answer:
    "मुख्य शाही स्नान एवं पवित्र स्नान तिथियाँ कुंभ मेले में जाने का सर्वोत्तम समय मानी जाती हैं।"
},

{
  question: "कुंभ मेला कितने दिनों तक चलता है?",
  answer:
    "ज्योतिषीय गणनाओं के अनुसार कुंभ मेला सामान्यतः एक से तीन महीने तक चल सकता है।"
},

{
  question: "कुंभ मेले में पवित्र स्नान का क्या महत्व है?",
  answer:
    "मान्यता है कि शुभ ग्रह-नक्षत्रों के संयोग में पवित्र नदी में स्नान करने से पापों का नाश होता है और आध्यात्मिक पुण्य की प्राप्ति होती है।"
},

{
  question: "पहली बार कुंभ मेले में जाने वालों को क्या तैयारी करनी चाहिए?",
  answer:
    "होटल पहले से बुक करें, पहचान पत्र साथ रखें, आधिकारिक दिशा-निर्देशों का पालन करें, भीड़ वाले दिनों में सावधानी रखें तथा आवश्यक सामान साथ रखें।"
},

{
  question: "क्या सिंहस्थ और महाकुंभ एक ही हैं?",
  answer:
    "नहीं। सिंहस्थ केवल उज्जैन में आयोजित होने वाले कुंभ मेले का नाम है, जबकि महाकुंभ विशेष रूप से प्रयागराज की परंपरा से जुड़ा हुआ है।"
}

],

relatedGuides: [

{
  title: "सिंहस्थ 2028 गाइड",

  description:
    "सिंहस्थ 2028 की तिथियाँ, शाही स्नान, यात्रा योजना और सम्पूर्ण जानकारी।",

  image: "simhastha-2028.webp",

  url: "/hi/guide/simhastha-2028"
},

{
  title: "महाकाल दर्शन गाइड",

  description:
    "महाकाल दर्शन समय, वीआईपी दर्शन, टिकट और मंदिर नियम।",

  image: "mahakal-darshan.webp",

  url: "/hi/guide/mahakal-darshan"
},

{
  title: "महाकाल भस्म आरती गाइड",

  description:
    "भस्म आरती बुकिंग, ड्रेस कोड और समय की सम्पूर्ण जानकारी।",

  image: "bhasma-arti.webp",

  url: "/hi/guide/bhasma-arti"
},

{
  title: "सावन 2026 गाइड",

  description:
    "उज्जैन में सावन उत्सव की सम्पूर्ण जानकारी।",

  image: "sawan-2026.webp",

  url: "/hi/guide/sawan-2026"
}

],

labels: {

  relatedGuides: "संबंधित गाइड",

  officialResources: "आधिकारिक संसाधन"

},

officialResources: [

{
  title: "श्री महाकालेश्वर मंदिर",

  url: "https://shrimahakaleshwar.com/"
},

{
  title: "मध्य प्रदेश पर्यटन",

  url: "https://www.mptourism.com/"
},

{
  title: "आईआरसीटीसी",

  url: "https://www.irctc.co.in/"
}

]
};

export default function KumbhLocations() {
  return (
    <>
      <GuideSEO
        title={guide.seo.title}
        description={guide.seo.description}
        slug={guide.slug}
        image={`/images/${guide.hero.image}`}
        lang={guide.language}
        keywords={guide.seo.keywords}
        published="2026-06-30"
        modified="2026-06-30"
      />

      <Helmet>
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": guide.faq.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />

        {/* Place Schema - Ujjain */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "Ujjain",
              "description": "Sacred city and one of the four Kumbh Mela locations, home to Mahakaleshwar Jyotirlinga",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ujjain",
                "addressLocality": "Ujjain",
                "addressRegion": "Madhya Pradesh",
                "postalCode": "456010",
                "addressCountry": "India"
              },
              "url": "https://www.mysimhastha.com/hi/guide/kumbh-locations",
              "telephone": "0734-2550563, 0734-2559277, 18002331008",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.1815",
                "longitude": "75.7733"
              }
            })
          }}
        />

        {/* TouristDestination Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              "name": "Ujjain",
              "description": "Ancient sacred city and one of the four Kumbh Mela locations, home to Mahakaleshwar Jyotirlinga",
              "url": "https://www.mysimhastha.com/hi/guide/kumbh-locations",
              "image": "https://www.mysimhastha.com/images/kumbh-locations.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ujjain",
                "addressRegion": "Madhya Pradesh",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "23.1815",
                "longitude": "75.7733"
              },
              "touristType": ["Religious", "Cultural", "Historical"],
              "includesAttraction": [
                {
                  "@type": "TouristAttraction",
                  "name": "Mahakaleshwar Jyotirlinga",
                  "description": "One of the twelve Jyotirlingas"
                },
                {
                  "@type": "TouristAttraction",
                  "name": "Shipra River",
                  "description": "Sacred river where Kumbh Mela bathing takes place"
                }
              ]
            })
          }}
        />
      </Helmet>

      <main className="simhastha-guide">
        <div className="container">

          <GuideHero guide={guide} />

          <GuideLanguageSwitcher guide={guide} />

          <ShareButtons
            title={guide.hero.title}
            image={`/images/${guide.hero.image}`}
            language={guide.language}
          />

          <GuideQuickAnswer guide={guide} />

          <GuideQuickFacts guide={guide} />

          <GuideKeyTakeaways guide={guide} />

          <GuideTableOfContents guide={guide} />

          {guide.sections.map((section) => (
            <GuideSection
              key={section.id}
              section={section}
            />
          ))}

          <GuideFAQ guide={guide} />

          <GuideRelatedGuides guide={guide} />

          <GuideOfficialResources guide={guide} />

          <ShareButtons
            title={guide.hero.title}
            image={`/images/${guide.hero.image}`}
            language={guide.language}
          />

          {/* STAY CONNECTED */}

          <div className="guide-box">

            <h2>MySimhastha से जुड़े रहें</h2>

            <p>
              यदि आप भारत के चारों पवित्र कुंभ स्थलों की यात्रा की योजना बना रहे हैं
              या उज्जैन सिंहस्थ 2028 की तैयारी कर रहे हैं, तो MySimhastha पर आपको
              यात्रा गाइड, मंदिरों की जानकारी, होटल, दर्शन, नवीनतम समाचार और
              महत्वपूर्ण अपडेट एक ही स्थान पर मिलेंगे।
            </p>

            <div className="social-links">

              <p>
                🔸 वेबसाइट :
                <a
                  href="https://www.mysimhastha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MySimhastha.com
                </a>
              </p>

              <p>
                🔸 इंस्टाग्राम :
                <a
                  href="https://instagram.com/mysimhastha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @mysimhastha
                </a>
              </p>

              <p>
                🔸 फेसबुक :
                <a
                  href="https://facebook.com/mysimhastha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MySimhastha Facebook
                </a>
              </p>

              <p>
                🔸 Reddit समुदाय :
                <a
                  href="https://reddit.com/r/Simhastha2028"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  r/Simhastha2028
                </a>
              </p>

            </div>

            <br />

            <h3>और पढ़ें</h3>

            <ul>

              <li>
                <Link to="/hi/guide/simhastha-2028">
                  सिंहस्थ 2028 सम्पूर्ण गाइड
                </Link>
              </li>

              <li>
                <Link to="/hi/guide/mahakal-darshan">
                  महाकाल दर्शन गाइड
                </Link>
              </li>

              <li>
                <Link to="/hi/guide/bhasma-arti">
                  महाकाल भस्म आरती गाइड
                </Link>
              </li>

              <li>
                <Link to="/hotels">
                  महाकाल मंदिर के पास होटल
                </Link>
              </li>

              <li>
                <Link to="/news">
                  सिंहस्थ एवं मंदिर समाचार
                </Link>
              </li>

              <li>
                <Link to="/blog">
                  उज्जैन यात्रा गाइड एवं अनुभव
                </Link>
              </li>

            </ul>

            <p>
              चाहे आप उज्जैन सिंहस्थ में भाग लेने की योजना बना रहे हों, भारत के
              चारों कुंभ स्थलों के बारे में जानकारी प्राप्त करना चाहते हों या
              हिन्दू तीर्थ परंपराओं को समझना चाहते हों, MySimhastha आपको
              विश्वसनीय यात्रा गाइड, धार्मिक जानकारी, होटल सुझाव और उपयोगी
              यात्रा सलाह प्रदान करता है।
            </p>

            <p>
              यह सामग्री <strong>हिन्दी</strong> और <strong>English</strong>
              दोनों भाषाओं में उपलब्ध है ताकि सभी श्रद्धालु अपनी यात्रा आसानी से
              योजना बना सकें।
            </p>

          </div>

          <div className="back-top">
            <a href="#top">
              ↑ शीर्ष पर जाएँ
            </a>
          </div>

        </div>
      </main>
    </>
  );
}