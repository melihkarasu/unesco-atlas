const UNESCO_SITES = [
    {
      id: 'site_gobeklitepe',
      name: 'Göbeklitepe',
      country: 'Türkiye (Şanlıurfa)',
      category: 'Kültürel',
      year: 2018,
      lat: 37.223,
      lon: 38.922,
      description: 'M.Ö. 9600 civarına tarihlenen, insanlık tarihinin bilinen en eski anıtsal tapınak kompleksi. Tarım öncesi avcı-toplayıcıların inanç dünyasını kökten değiştirdi.',
      image: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_efes',
      name: 'Efes Antik Kenti (Ephesus)',
      country: 'Türkiye (İzmir)',
      category: 'Kültürel',
      year: 2015,
      lat: 37.940,
      lon: 27.341,
      description: 'Celsus Kütüphanesi, Antik Tiyatro ve Artemis Tapınağı ile Doğu Akdeniz’in en görkemli Roma metropollerinden biri.',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_kapadokya',
      name: 'Göreme Milli Parkı ve Kapadokya',
      country: 'Türkiye (Nevşehir)',
      category: 'Karma (Kültürel & Doğal)',
      year: 1985,
      lat: 38.643,
      lon: 34.829,
      description: 'Volkanik tüf erozyonunun oluşturduğu peri bacaları ve kayalara oyulmuş Bizans kiliseleri, freskleri ve yeraltı şehirleri.',
      image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_pamukkale',
      name: 'Hierapolis - Pamukkale Travertenleri',
      country: 'Türkiye (Denizli)',
      category: 'Karma (Kültürel & Doğal)',
      year: 1988,
      lat: 37.925,
      lon: 29.121,
      description: 'Kalsiyum oksit içeren termal suların oluşturduğu bembeyaz basamaklı traverten terasları ve antik şifa kenti Hierapolis.',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_nemrut',
      name: 'Nemrut Dağı Heykelleri',
      country: 'Türkiye (Adıyaman)',
      category: 'Kültürel',
      year: 1987,
      lat: 37.980,
      lon: 38.740,
      description: 'Kommagene Kralı I. Antiochos’un tanrılara ve atalarına minnettarlık anıtı olarak 2150 metre zirveye diktirdiği devasa heykeller ve tümülüs.',
      image: 'https://images.unsplash.com/photo-1548625361-19597753bfcf?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_machu',
      name: 'Machu Picchu Tarihi Koruma Alanı',
      country: 'Peru',
      category: 'Karma (Kültürel & Doğal)',
      year: 1983,
      lat: -13.163,
      lon: -72.545,
      description: 'And Dağları’nın 2.430 metre zirvesinde bulutlar arasında yükselen 15. yüzyıl İnka medeniyeti mühendislik şaheseri.',
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_tajmahal',
      name: 'Tac Mahal (Taj Mahal)',
      country: 'Hindistan (Agra)',
      category: 'Kültürel',
      year: 1983,
      lat: 27.175,
      lon: 78.042,
      description: 'Babür İmparatoru Şah Cihan’ın eşi Mümtaz Mahal için beyaz mermerden inşa ettirdiği İslami mimarinin taç mücevheri.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_petra',
      name: 'Petra Antik Kenti',
      country: 'Ürdün',
      category: 'Kültürel',
      year: 1985,
      lat: 30.328,
      lon: 35.444,
      description: 'Kızıl kumtaşı kayalıklara oyulmuş El-Hazne (Hazine) tapınağı ve Nabati krallığının çöl su kanalları harikası.',
      image: 'https://images.unsplash.com/photo-1579606032822-04e43cf52243?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_colosseum',
      name: 'Roma Kolezyum ve Tarihi Merkez',
      country: 'İtalya (Roma)',
      category: 'Kültürel',
      year: 1980,
      lat: 41.890,
      lon: 12.492,
      description: 'Flavius Amfitiyatrosu: Gladyatör dövüşleri ve Roma İmparatorluğu’nun kudretini simgeleyen antik dünyanın en büyük amfitiyatrosu.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_giza',
      name: 'Gize Piramitleri ve Sfenks',
      country: 'Mısır',
      category: 'Kültürel',
      year: 1979,
      lat: 29.979,
      lon: 31.134,
      description: 'Büyük Keops Piramidi: Antik dünyanın yedi harikasından günümüze ulaşabilen tek anıt.',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_acropolis',
      name: 'Atina Akropolisi (Parthenon)',
      country: 'Yunanistan',
      category: 'Kültürel',
      year: 1987,
      lat: 37.971,
      lon: 23.726,
      description: 'Klasik Yunan mimarisi ve felsefesinin zirve noktası; Tanrıça Athena’ya adanmış Parthenon tapınağı.',
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'site_stonehenge',
      name: 'Stonehenge Megalitleri',
      country: 'Birleşik Krallık',
      category: 'Kültürel',
      year: 1986,
      lat: 51.178,
      lon: -1.826,
      description: 'M.Ö. 3000 ile 2000 arasına tarihlenen, gün dönümü astronomik hizalamalarına sahip devasa megalitik taş çemberi.',
      image: 'https://images.unsplash.com/photo-1599833975787-5c143f373c30?w=600&auto=format&fit=crop&q=80'
    }
  ];

let unescoMap = null;
        let allSites = [];
        let markers = [];

        function initMap() {
          unescoMap = L.map('unesco-map', {
            center: [38.5, 30],
            zoom: 4
          });

          L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            maxZoom: 19
          }).addTo(unescoMap);
        }

        // Standalone: veri gömülü (backend'teki 12 seçkin miras alanı kütüphanesiyle birebir)
        function loadSites() {
          allSites = UNESCO_SITES;
          document.getElementById('unesco-count-badge').innerText = allSites.length;
          filterSites();
        }

        function filterSites() {
          const q = (document.getElementById('unesco-search').value || '').trim().toLowerCase();
          const cat = document.getElementById('unesco-category-select').value;

          const list = allSites.filter(s => {
            const matchQ = !q || s.name.toLowerCase().includes(q) || s.country.toLowerCase().includes(q) || s.description.toLowerCase().includes(q);
            const matchCat = cat === 'all' || s.category.includes(cat);
            return matchQ && matchCat;
          });

          renderGrid(list);
          renderMarkers(list);
        }

        function quickFilter(txt) {
          document.getElementById('unesco-search').value = txt;
          filterSites();
        }

        function renderGrid(list) {
          const grid = document.getElementById('sites-grid');
          if (list.length === 0) {
            grid.innerHTML = '<div class="col-span-full py-12 text-center text-mistral-stone font-medium text-sm">Arama kriterlerine uygun miras alanı bulunamadı.</div>';
            return;
          }

          grid.innerHTML = list.map(s => `
            <div onclick="focusSite(${s.lat}, ${s.lon})" class="rounded-xl bg-white border border-mistral-hairline hover:border-mistral-orange/40 hover:shadow-md transition duration-200 overflow-hidden flex flex-col justify-between group cursor-pointer">
              <div>
                <div class="relative overflow-hidden aspect-video bg-mistral-cream">
                  <img src="${s.image}" alt="${s.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                  <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-white/90 backdrop-blur text-mistral-ink border border-mistral-hairline shadow-2xs">
                    ${s.year} Yılı
                  </span>
                </div>
                <div class="p-5">
                  <span class="text-[11px] font-semibold text-mistral-orange uppercase tracking-wider block mb-1">📍 ${s.country}</span>
                  <h3 class="text-xl font-bold font-editorial text-mistral-ink group-hover:text-mistral-orange transition mb-2">
                    ${s.name}
                  </h3>
                  <p class="text-xs text-mistral-slate line-clamp-3 leading-relaxed">
                    ${s.description}
                  </p>
                </div>
              </div>

              <div class="p-5 pt-0">
                <div class="pt-3 border-t border-mistral-hairline flex items-center justify-between text-xs font-semibold text-mistral-orange">
                  <span>Haritada Konumlan &rarr;</span>
                  <span class="px-2 py-0.5 rounded-full bg-mistral-cream border border-mistral-beige-deep text-[10px] text-mistral-ink font-normal">${s.category}</span>
                </div>
              </div>
            </div>
          `).join('');
        }

        function renderMarkers(list) {
          markers.forEach(m => m.remove());
          markers = [];

          if (list.length > 0) {
            const group = [];
            list.forEach(s => {
              const customIcon = L.divIcon({
                html: '<div style="font-size: 24px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); transform: translate(-12px, -12px);">🏛️</div>',
                className: 'unesco-marker',
                iconSize: [24, 24]
              });

              const m = L.marker([s.lat, s.lon], { icon: customIcon })
                .addTo(unescoMap)
                .bindPopup(`<strong>${s.name}</strong><br><span style="font-size:11px;color:#666;">${s.country} (${s.year})</span><br><p style="font-size:11px;margin-top:4px;">${s.description.slice(0,100)}...</p>`);

              markers.push(m);
              group.push([s.lat, s.lon]);
            });

            if (group.length > 0) {
              unescoMap.fitBounds(group, { padding: [50, 50], maxZoom: 8 });
            }
          }
        }

        function focusSite(lat, lon) {
          if (unescoMap) {
            unescoMap.setView([lat, lon], 10, { animate: true });
            window.scrollTo({ top: 220, behavior: 'smooth' });
          }
        }

        document.addEventListener('DOMContentLoaded', () => {
          initMap();
          loadSites();
        });
