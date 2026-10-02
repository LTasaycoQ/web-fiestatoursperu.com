 {itinerario.optionalActivities && itinerario.optionalActivities.length > 0 && (
        <section class="optional-section">
                <div class="optional-section__header" data-aos="fade-right">
                  <div class="optional-section__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <span class="optional-section__kicker">Mejora tu experiencia</span>
                    <h2 class="optional-section__title">Actividades Opcionales</h2>
                  </div>
                </div>
                <p data-aos="fade-right" class="optional-section__subtitle">Complementa tu viaje con estas experiencias únicas disponibles durante tu estadía</p>

                <div class="optional-grid" data-aos="fade-up">
                  {itinerario.optionalActivities.map((opt) => {
                    const isMealOptions = opt.mealOptions && opt.mealOptions.length > 0;
                    
                    return (
                      <div class={`optional-card ${isMealOptions ? 'optional-card--meal-options' : ''}`}>
                        {isMealOptions ? (
                          <div class="optional-card__content meal-options-layout">
                            {opt.image && opt.image !== "" && (
                              <div class="optional-card__image">
                                <img src={opt.image} alt={opt.title} loading="lazy" />
                              </div>
                            )}
                            <div class="optional-card__text-wrapper">
                              <h3 class="optional-card__title">{opt.title}</h3>
                              <div class="meal-options-container">
                                <p class="meal-options-description">{opt.description}</p>
                                <ul class="meal-options-list">
                                  {opt.mealOptions!.map((meal: any) => (
                                    <li class="meal-option-item">
                                      <span class="meal-option-name">{typeof meal === 'string' ? meal : meal.name}</span>
                                      {typeof meal !== 'string' && meal.type && (<span class="meal-option-badge">{meal.type}</span>)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            {opt.image && opt.image !== "" && (
                              <div class="optional-card__image">
                                <img src={opt.image} alt={opt.title} loading="lazy" />
                              </div>
                            )}
                            <div class="optional-card__content">
                              <h3 class="optional-card__title">{opt.title}</h3>
                              <div class="optional-card__text-wrapper">
                                <p class="optional-card__description" data-description-id={opt.id}>{opt.description}</p>
                                <button class="optional-card__read-more" data-read-more-id={opt.id} type="button">
                                  <span class="read-more-text">Leer más</span>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
              )}